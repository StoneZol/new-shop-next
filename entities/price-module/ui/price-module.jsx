import { shop } from '@/shared/shop.config'
import React, { memo } from 'react'
import styles from './price-module.module.scss'

const PriceModule = memo(function PriceModule({ units,discount,price,totalPrice,fontSize=18 }){
  return (
    <div className={styles.div}>
    {discount == 0 ? 
    (<>
        <span className={styles.total_price} 
                style={{fontSize :`${fontSize+6}px`}}>
                    {Math.round(totalPrice* 100) / 100}{shop.currency}
        </span>
        <span className={styles.units} 
                style={{fontSize :`${fontSize-1}px`}}>
                    /{units}
        </span>
    </>)
    :
    (<>
        <span className={styles.old_price}
            style={{fontSize :`${fontSize-2}px`}}>
                {price}{shop.currency} 
        </span> 
        <span className={styles.total_price} 
            style={{fontSize :`${fontSize+6}px`}}>
                 {Math.round(totalPrice* 100) / 100}{shop.currency}
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