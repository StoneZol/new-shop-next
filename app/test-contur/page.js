import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";
import styles from './page.module.scss'
import SkeletonBuyPriceWidget from "@/widgets/buy-price-widget/ui/skeleton-buy-price-widget";

export default function TestPage() {
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
            </div>
    )
  }