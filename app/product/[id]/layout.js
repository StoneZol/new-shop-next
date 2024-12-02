export const revalidate = 360

export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await fetch(`https://ztrz483g-5267.euw.devtunnels.ms/Product/${id}`);
  const productData = await res.json();

  if (productData.message === `ID: ${id} not found!`) {
    return { title: 'Товар не найден', description: 'Страница товара не найдена.' };
  }

  return {
    title: productData.name,
    description: productData.description,
    openGraph: {
      title: productData.name,
      description: productData.description.about,
      images: [productData.imageUrls[0]],
    },
    keywords: productData.category,
  };
}

export default async function Layout({ children, params}) {
  const { id } = params;
  const res = await fetch(`https://ztrz483g-5267.euw.devtunnels.ms/Product/${id}`);
  const productData = await res.json();
  if (productData.message ==`ID: ${id} not found!`) {
      notFound();
  }

  console.log('layout data ', productData);
  return (
    <>
        {children}
    </>
  );
}
