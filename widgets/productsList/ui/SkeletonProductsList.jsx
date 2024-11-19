import SkeletonProductCard from '@/entities/productCard/ui/SkeletonProductCard'
import styles from './productsList.module.scss'
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