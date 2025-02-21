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
import About from "@/entities/about-product/ui/about";

export default function TestPage() {
 const testAbout = '#Шоколадный фондан с жидкой начинкой# Фондан – это десерт, который покоряет с первого укуса. '+
    'Хрустящая корочка скрывает внутри \nгустую жидкую начинку из темного шоколада. \n\n![Alt text](5/1)(https://random-image-pepebigotes.vercel.app/api/skeleton-random-image) '+
    '\n #Подача# Подается с шариком ванильного мороженого, который подчеркивает глубину шоколадного вкуса. Настоящий шедевр для ценителей сладкого.'+
    '![Alt text](16/1)(https://random-image-pepebigotes.vercel.app/api/skeleton-random-image)'
    return (
        <>
        <PromoActions/><br/><br/>
        {/* <LoginForm/> */}
        <TopRatedGoods/><br/><br/>

        <br/><br/>

        <SkeletonAboutProduct/>

        <About data={testAbout}/>
        </>
    )
}