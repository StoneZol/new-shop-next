import React from 'react'
import styles from './buy-price-widget.module.scss'
import Skeleton from 'react-loading-skeleton'

export default function SkeletonBuyPriceWidget() {
  return (
    <section className={styles.section}>
    <div className={styles.childrens}>
      <Skeleton width={320} height={28}/>
    </div>
    <div className={styles.price}>
        <Skeleton width={240} height={39}/>
    </div>
    <div className={styles.buttons}>
        <Skeleton  width={320} height={40}/>                   
    </div>
</section>
  )
}
