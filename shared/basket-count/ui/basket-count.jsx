'use client'
import styles from './basket-count.module.scss'
import {shop} from '@/shared/shop.сonfig'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function BasketCount({basket, zeroStateTaxt=''}) {
    const [basketCount, setBasketCount] = useState(null)
    // const basket = useSelector(state => state.basket.basket)
    useEffect(() => {
        const totalCount = basket.reduce((acc, item) => acc + item.totalPrice * item.count, 0)
        setBasketCount(totalCount)
    }, [basket])
    return (
        <div className={styles.basketCount}>
            {basketCount> 0 ? (<h3>Итого: {basketCount}{shop.currency}</h3>) : (<h3>{zeroStateTaxt}</h3>)}
        </div>
    )
}
