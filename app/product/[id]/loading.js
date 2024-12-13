import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";
import styles from './page.module.scss'
import SkeletonBuyPriceWidget from "@/widgets/buy-price-widget/ui/skeleton-buy-price-widget";

export default function loading() {
    return (
        <div className={styles.page_box}>
            <section className={styles.page}>
                <div className={styles.right_side}>
                    <Skeleton width={340} height={340}/>
                </div>
                <div className={styles.center_side}>
                    <SkeletonAboutProduct/>
                </div>
                <div className={styles.right_side}>
                    <SkeletonBuyPriceWidget/>
                    <SkeletonNutritionalValue/>
                </div>
            </section>
        </div>
    )
}