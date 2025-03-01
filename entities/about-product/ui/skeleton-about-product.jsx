import Skeleton from 'react-loading-skeleton'
import styles from './about-product.module.scss'
import SkeletonNutritionalValue from './nutritional-value/ui/skeleton-nutritional-value'

export default function SkeletonAboutProduct() {
    return (
        <section className={styles.block}>
            <section className={styles.content}>
                    <Skeleton height={450}/>
                    <Skeleton height={150}/>
                    <SkeletonNutritionalValue/>
            </section>
        </section>
    )
}
