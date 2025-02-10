'use client'
import styles from './basket-count.module.scss'
import {shop, shopBasket} from '@/shared/shop.сonfig'
import React, {useEffect, useState} from 'react'

export default function BasketCount({basket, zeroStateTaxt=''}) {
    const [basketCount, setBasketCount] = useState(null)
    useEffect(() => {
        const totalCount = basket.reduce((acc, item) => acc + item.totalPrice * item.count, 0)
        setBasketCount(totalCount)
    }, [basket])
    return (
        <div className={styles.basket_count}>
            {basketCount> 0 ? 
                (<h3>{shopBasket.summary}: {basketCount}{shop.currency}</h3>) 
                : 
                (<h3>{zeroStateTaxt}</h3>)}
        </div>
    )
}
