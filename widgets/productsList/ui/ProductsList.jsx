import React from 'react'
import styles from './productsList.module.scss'
import ProductCard from '../../../entities/productCard/ui/ProductCard';

export default function ProductsList({products}) {
  return (
    <section className={styles.section} aria-label='Список товаров'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
    </section>
  )
}
