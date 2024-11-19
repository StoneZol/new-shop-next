import SkeletonProductCard from '@/entities/product-card/ui/skeleton-product-card'
import styles from './products-list.module.scss'
import React from 'react'

export default function SkeletonProductsList() {
  return (
    <section className={styles.section}>
        {Array(6).fill(null).map((data,index)=>(
            <SkeletonProductCard key={index}/>
        ))}
    </section>
  )
}