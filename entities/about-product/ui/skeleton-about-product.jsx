import Skeleton from 'react-loading-skeleton'
import styles from './about-product.module.scss'

export default function SkeletonAboutProduct() {
  return (
    <section className={styles.block}>
    <div className={styles.navigation}>
      <Skeleton  height={22} width={280}/></div>
    <section className={styles.content}>
        <div className={styles.active_zone}>
            <Skeleton  height={134}/>
        </div>
    </section>
</section>
  )
}
