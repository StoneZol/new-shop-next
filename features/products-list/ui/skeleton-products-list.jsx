import SkeletonProductCard from '@/entities/product-card/ui/skeleton-product-card'
import styles from './products-list.module.scss'
import React from 'react'

export default function SkeletonProductsList({array = 12}) {
  return (
    <section className={styles.section}>
        {Array(array).fill(null).map((data,index)=>(
            <SkeletonProductCard key={index}/>
        ))}
    </section>
  )
}