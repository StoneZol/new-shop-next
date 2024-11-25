import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonBuyPageBlock from "@/entities/buy-page-block/ui/skeleton-buy-page-block";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";

export default function loading() {
    return (
          <>
          <Skeleton/>
          <SkeletonAboutProduct/>
          <SkeletonBuyPageBlock/>
          <SkeletonNutritionalValue/>
          </>
    )
  }