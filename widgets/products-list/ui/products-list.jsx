import React from 'react'
import styles from './products-list.module.scss'
import ProductCard from '@/entities/product-card/ui/product-card'

export default function ProductsList({products}) {
  return (
    <section className={styles.section} aria-label='Список товаров'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
    </section>
  )
}
