import formatForSEO from "@/shared/public-func/format-seo";
import { notFound } from "next/navigation";
import { getProductUrlApi } from '@/shared/api-endpoint/api-endpoint';

export const revalidate = 360

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // Дожидаемся разрешения
  const { id } = resolvedParams; // Теперь можно использовать id
  const res = await fetch(`${getProductUrlApi}/${id}`);
  if (!res.ok) {
    notFound();
 }

  const productData = await res.json();

  if (productData.message === `ID: ${id} not found!`) {
    return { title: 'Товар не найден', description: 'Страница товара не найдена.' };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "sku" : productData.sku || '',
    "image": productData.imageUrls[0],
    "description": formatForSEO(productData.description.about),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "price": productData.totalPrice.toString(),
      "availability": productData.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock"
    }
  };


  return {
    title: productData.name,
    description: formatForSEO(productData.description.about),
    canonical: `${getProductUrlApi}/${id}`,
    openGraph: {
      title: productData.name,
      description: formatForSEO(productData.description.about),
      images: [productData.imageUrls[0]],
    },
    jsonLd,
  };
}

export default async function Layout({ children, params}) {
  const metadata = await generateMetadata({ params });
  return (
    <>
     {metadata.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.jsonLd) }}
        />
      )}
        {children}
    </>
  );
}
