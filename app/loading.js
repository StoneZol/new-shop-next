import SkeletonProductsList from "@/features/products-list/ui/skeleton-products-list";
import SkeletonPromoBanners from "@/widgets/promo-banners/ui/skeleton-promo-banners";

export default function loading() {
  return (
    <>
    <SkeletonPromoBanners/>
    <SkeletonProductsList/>
    </>
  )
}
