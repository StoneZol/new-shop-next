import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './promo-banners.module.scss'

export default function SkeletonPromoBanners() {
  return (
    <section className={styles.section}>
        <Skeleton className={styles.skeleton}/>
    </section>
  )
}
