import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import SkeletonBuyPageBlock from "@/entities/buy-page-block/ui/skeleton-buy-page-block";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import Skeleton from "react-loading-skeleton";
import styles from './page.module.scss'

export default function loading() {
    return (
      //     <>
      //     <Skeleton/>
      //     <SkeletonAboutProduct/>
      //     <SkeletonBuyPageBlock/>
      //     <SkeletonNutritionalValue/>
      //     </>
              <div className={styles.pageBox}>
              <section className={styles.page}>
                <div className={styles.sliderBox}>
                    <Skeleton width={340} height={340}/>
                </div>
                <section className={styles.aboutBox}>
                  <SkeletonAboutProduct/>
                  <SkeletonNutritionalValue/>
                </section>
                  <SkeletonBuyPageBlock/>
              </section>
            </div>
    )
  }