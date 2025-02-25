import styles from './category-card.module.scss'
import Skeleton from 'react-loading-skeleton'

export default function SkeletonCategoryCard() {
  return (
    <div className={styles.skeleton}><Skeleton width={120} height={25}/></div>
  )
}
