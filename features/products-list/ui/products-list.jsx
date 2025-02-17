import React from 'react'
import styles from './products-list.module.scss'
import ProductCard from '@/entities/product-card/ui/product-card'
import SkeletonProductsList from './skeleton-products-list';
import { shopProductListAreaLabel } from '@/shared/shop.config';

export default function ProductsList({products}) {
  if (!products || products.length === 0) {
    return <SkeletonProductsList/>;
}
  return (
    <section className={styles.section} aria-label={shopProductListAreaLabel}>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
    </section>
  )
}
