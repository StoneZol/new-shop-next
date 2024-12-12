import React from 'react'
import styles from './products-list.module.scss'
import ProductCard from '@/entities/product-card/ui/product-card'
import SkeletonProductsList from './skeleton-products-list';

export default function ProductsList({products}) {
  if (!products || products.length === 0) {
    return <SkeletonProductsList/>;
}
  return (
    <section className={styles.section} aria-label='Список товаров'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
    </section>
  )
}
