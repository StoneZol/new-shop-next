import styles from './page.module.scss'
import React from 'react'
import BasketWidget from '@/widgets/basket-widget/ui/basket-widget'
import { shopBasket } from '@/shared/shop.config';


export default function Basket() {
  return (
    <section className={styles.basket}>
      <h2 className={styles.h2}>{shopBasket.basketName}</h2>
       <BasketWidget/>
      </section>
  )
}
