import React from 'react'
import styles from './buy-price-widget.module.scss'
import PriceModule from '@/entities/price-module/ui/price-module'
import BuyPageBlock from '@/entities/buy-page-block/ui/buy-page-block'

export default function BuyPriceWidget({product, children}) {
  return (
    <section className={styles.section}>
        <div className={styles.childrens}>
          {children}
        </div>
        <div className={styles.price}>
            <PriceModule    units={product.units} 
                            discount={product.discount} 
                            price={product.price} 
                            totalPrice = {product.totalPrice}
                            fontSize={28}/>
        </div>
        <div className={styles.buttons}>
            <BuyPageBlock   product={product} 
                            link={true}/>
                            
        </div>
    </section>
  )
}
