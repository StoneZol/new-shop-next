import BasketCount from '@/shared/basket-count/ui/basket-count'
import styles from './page.module.scss'
import React from 'react'
import BasketWidget from '@/widgets/basket-widget/ui/basket-widget'


export default function Basket() {

console.log('baket render');
  return (
    <section className={styles.basket}>
      <h2 className={styles.h2}>Корзина</h2>
       <BasketWidget/>
      </section>
  )
}
