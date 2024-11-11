'use client'
import React, { useEffect, useState } from 'react'
import styles from './pointBasketLength.module.scss'
import {useSelector} from 'react-redux'

export default function PointBasketLength() {
    const basket = useSelector(state => state.basket.basket)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
    <> 
    {basket.length> 0 &&
        <span className={styles.span}>
            {
                basket.length > 999 ? '999+': `${basket.length}`
            }
        </span>
    }
    </>
  )
}
