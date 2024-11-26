import { shop } from '@/shared/shop.сonfig'
import React, { memo } from 'react'
import styles from './price-module.module.scss'

const PriceModule = memo(function PriceModule({ units,discount,price,totalPrice,fontSize=18 }){
  return (
    <div className={styles.div}>
    {discount == 0 ? 
    (<>
        <span className={styles.totalPrice} 
                style={{fontSize :`${fontSize+6}px`}}>
                    {totalPrice}{shop.currency}
        </span>
        <span className={styles.units} 
                style={{fontSize :`${fontSize-1}px`}}>
                    /{units}
        </span>
    </>)
    :
    (<>
        <span className={styles.oldPrice}
            style={{fontSize :`${fontSize-2}px`}}>
                {price}{shop.currency} 
        </span> 
        <span className={styles.totalPrice} 
            style={{fontSize :`${fontSize+6}px`}}>
                {totalPrice}{shop.currency}
        </span>
        <span className={styles.units}
            style={{fontSize :`${fontSize-1}px`}}>
                /{units}
        </span>
    </>)}
</div>
  )
})

export default PriceModule