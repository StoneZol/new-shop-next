import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";
import styles from './page.module.scss'
import SkeletonBuyPriceWidget from "@/widgets/buy-price-widget/ui/skeleton-buy-price-widget";
import AboutProduct from "@/entities/about-product/ui/about-product";
import Breadcrumbs from "@/features/breadcrumbs/ui/breadcrumbs";
import loading from './../loading';
import LoginForm from "@/features/auth/login-form/ui/login-form";
import TopRatedGoods from "@/widgets/top-rated-goods/ui/top-rated-goods";
import PromoActions from "@/entities/promo-actions/ui/promo-actions";

export default function TestPage() {

    return (
        <>
        <PromoActions/><br/><br/>
        {/* <LoginForm/> */}
        <TopRatedGoods/><br/><br/>

        <br/><br/>

        <SkeletonAboutProduct/>
        </>
    )
}