import Skeleton from 'react-loading-skeleton'
import styles from './about-product.module.scss'

export default function SkeletonAboutProduct() {
    return (
        <section className={styles.block}>
            <section className={styles.content}>
                <div className={styles.active_zone}>
                    <Skeleton height={300}/>
                </div>
                <div className={styles.active_zone}>
                    <Skeleton height={150}/>
                </div>
            </section>
        </section>
    )
}
