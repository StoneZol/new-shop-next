import React from 'react'
import styles from './discount-tag-line.module.scss'
import { shopDiscountTagText } from '@/shared/shop.сonfig';

export default function DiscountTagLine({discount}) {
    if (discount > 0) {
        return <aside className={styles.sale}> {shopDiscountTagText} -{discount}%</aside>   
    } else return null;
}
