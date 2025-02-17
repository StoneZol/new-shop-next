'use client'
import styles from './basket-count.module.scss'
import {shop, shopBasket} from '@/shared/shop.config'
import useBasketCount from '../hooks/use-basket-count'

export default function BasketCount({basket, zeroStateTaxt=''}) {
    
    const {basketCount} = useBasketCount(basket)

    return (
        <div className={styles.basket_count}>
            {basketCount> 0 ? 
                (<h3>{shopBasket.summary}: {basketCount}{shop.currency}</h3>) 
                : 
                (<h3>{zeroStateTaxt}</h3>)}
        </div>
    )
}
