'use client'
import ProductsList from '@/widgets/products-list/ui/products-list'
import styles from './page.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Basket() {

  const basket = useSelector(state=>state.basket.basket)

  if (typeof window === 'undefined') {
    // Предварительный SSR-рендеринг (можно вернуть "пустую корзину" как заглушку)
    return (<>
    <h2>Корзина</h2>
    <section>Корзина пуста:&#40;</section>
    </>)
  }

  return (
    <section className={styles.basket}>
      <h2>Корзина</h2>{basket.length> 0 ? 
              (<ProductsList products={basket}/>)
              :
              (<section>Корзина пуста:&#40;</section>)}
      </section>
  )
}
