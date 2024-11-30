import Skeleton from 'react-loading-skeleton'
import styles from './about-product.module.scss'

export default function SkeletonAboutProduct() {
  return (
    <section className={styles.section}>
    <div className={styles.navigation}><Skeleton  height={22} width={280}/></div>
    <section className={styles.content}>
        <div className={styles.activeZone}>
            <Skeleton  height={134}/>
        </div>
    </section>
</section>
  )
}
