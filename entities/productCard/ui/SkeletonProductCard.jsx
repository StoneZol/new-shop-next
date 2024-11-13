import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './productCard.module.scss'

import React from 'react'

export default function SkeletonProductCard() {
  return (
    <article className={styles.skeleton}>
    <figure>
        <Skeleton circle={false} height={180} width={180} />
    </figure>
    <header>
        <Skeleton width={160} height={21} />
    </header>
    <section>
        <Skeleton width={100} height={22} />
    </section>
    <footer >
        <Skeleton width={160} height={24} />
    </footer>
</article>
  )
}