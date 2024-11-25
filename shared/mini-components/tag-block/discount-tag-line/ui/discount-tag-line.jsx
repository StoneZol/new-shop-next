import React from 'react'
import styles from './discount-tag-line.module.scss'

export default function DiscountTagLine({discount}) {
    if (discount > 0) {
        return <aside className={styles.sale}> Скидка! -{discount}%</aside>   
    } else return null;
}
