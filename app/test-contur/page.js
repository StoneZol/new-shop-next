import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";
import styles from './page.module.scss'
import SkeletonBuyPriceWidget from "@/widgets/buy-price-widget/ui/skeleton-buy-price-widget";
import AboutProduct from "@/entities/about-product/ui/about-product";
import Breadcrumbs from "@/features/breadcrumbs/ui/breadcrumbs";
import loading from './../loading';
import SkeletonPromoBanners from "@/widgets/promo-banners/ui/skeleton-promo-banners";

export default function TestPage() {

    return (
        <><Breadcrumbs category={'Ijhrjkf'} sku="343434343"/>
        <SkeletonPromoBanners/>
        </>
    )
}