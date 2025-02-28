import Skeleton from 'react-loading-skeleton'
import styles from './about-product.module.scss'
import NutritionalValue from './nutritional-value/ui/nutritional-value'
import SkeletonNutritionalValue from './nutritional-value/ui/skeleton-nutritional-value'

export default function SkeletonAboutProduct() {
    return (
        <section className={styles.block}>
            <section className={styles.content}>
                    <Skeleton height={300}/>
                    <Skeleton height={150}/>
                    <SkeletonNutritionalValue/>
            </section>
        </section>
    )
}
