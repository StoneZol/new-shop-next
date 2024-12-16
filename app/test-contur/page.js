import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";
import styles from './page.module.scss'
import SkeletonBuyPriceWidget from "@/widgets/buy-price-widget/ui/skeleton-buy-price-widget";
import AboutProduct from "@/entities/about-product/ui/about-product";
import Breadcrumbs from "@/features/breadcrumbs/ui/breadcrumbs";

export default function TestPage() {
    const data = {
        about: "## **Лимонный тарт с меренгой**  \nЛимонный тарт – это изысканное сочетание ки" +
                "слинки лимонного крема и сладкой воздушной меренги.Хрустящая основа из песочно" +
                "го теста идеально дополняет текстурную композицию. ![Alt text](https://random-" +
                "image-pepebigotes.vercel.app/api/skeleton-random-image) Каждый кусочек дарит б" +
                "одрящее послевкусие и легкость. ![Alt text](https://random-image-pepebigotes.v" +
                "ercel.app/api/skeleton-random-image) Подходит как для легкого перекуса, так и " +
                "для особенных случаев."
    }
    return (
        <div className={styles.pageBox}>
            <section className={styles.page}>
                <div className={styles.sliderBox}>
                    <Skeleton width={340} height={340}/>
                </div>
                <section className={styles.aboutBox}>
                    <SkeletonAboutProduct/>
                    <SkeletonNutritionalValue/>
                </section>
                <SkeletonBuyPriceWidget/>
            </section>
            <Breadcrumbs/>
            <button onClick={()=> {throw new Error('error')}}></button>
            <AboutProduct data={data}/>
        </div>
    )
}