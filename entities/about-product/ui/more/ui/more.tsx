import React from 'react'

import Link from 'next/link'
import styles from './more.module.scss'
import { shopSomeTranslate } from '@/shared/shop.config'

export interface MoreProps{
    data: { name: string,value: string } [],
    category: string
}

export default function More({data, category}:MoreProps) {
    if (!data || !category) return null
    return (
        <div className={styles.more}>
            <div className={styles.more_string}>
                <div className={styles.type__category}>{shopSomeTranslate.category}</div>
                <Link className={styles.property__link} href={`/category/${category}`}>{category.toUpperCase()}</Link>
            </div>
                {data.map((item, index)=>(
                    <div className={styles.more_string} key={index}>
                        <div className={styles.type}>{item.name}</div>
                        <div className={styles.property}>{item.value}</div>
                    </div>
                ))}
        </div>
    )
}