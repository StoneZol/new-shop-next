import React from 'react'
import { nutritionalText } from '@/shared/shop.config'
import styles from './nutritional-value.module.scss'

export interface NutritionalValueProps {
    values: {
        protein: string,
        fat: string,
        carbohydrate: string,
        calories: string
    }
}
export default function NutritionalValue({values}:NutritionalValueProps) {

    if( !values ) return null

    return (
        <section className={styles.section}>
        <h3>{nutritionalText.head}</h3>
        <div className={styles.nutritional_box}>
            <div>
                <span className={styles.value}>{values.protein}</span><br/>
                <span className={styles.text}>{nutritionalText.protein}</span>
            </div>
            <div>
                <span className={styles.value}>{values.fat}</span><br/>
                <span className={styles.text}>{nutritionalText.fat}</span>
            </div>
            <div>
                <span className={styles.value}>{values.carbohydrate}</span><br/>
                <span className={styles.text}>{nutritionalText.carbohydrate}</span>
            </div>
            <div>
                <span className={styles.value}>{values.calories}</span><br/>
                <span className={styles.text}>{nutritionalText.calories}</span> 
            </div>
        </div>
    </section>
    )
}
