import React from 'react'
import styles from './breadcrumbs.module.scss'
import Skeleton from 'react-loading-skeleton'

export default function SkeletonBreadcrumbs() {
  return (
    <div className={styles.skeleton}>
    <div className={styles.left_side}>
        <Skeleton width={340}/>
    </div>
    <div className={styles.right_side}>
        <Skeleton width={105}/>
    </div>
  </div>
  )
}
