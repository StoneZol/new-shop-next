import styles from './promo-actions.module.scss'
import Skeleton from 'react-loading-skeleton'

export default function SkeletoPromoActions() {
  return (
    <section className={styles.skeleton}>
        <Skeleton width="100%" style={{aspectRatio: '2/1', flex: '1'}}/>
    </section>
  )
}
