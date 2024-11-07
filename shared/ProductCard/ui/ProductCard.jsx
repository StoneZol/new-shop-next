'use client'
import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import { shop } from '@/shared/shopConfig'

export default function ProductCard({product}) {
  return (
    <article className={styles.article}>
        <figure className={styles.figure}>
            <Image src={'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'} 
            alt='#' 
            width={160} 
            height={160}/>
        </figure>
        <header className={styles.header}>
            <h2 className={styles.h2}>Мармеладные мишки(в ассортименте)</h2>
        </header>

        <section className={styles.section}>
            {/* <span className={styles.totalPrice}>800{shop.currency}</span>/шт */}
            <span className={styles.oldPrice}>800{shop.currency}</span> <span className={styles.totalPrice}>400{shop.currency}</span>/шт
        </section>
        <footer className={styles.footer}>
            {/* <button> Купить</button> */}
            <button>-</button>
            <input type="number"
            min={0}
            max={999}/>
            <button>+</button>

        </footer>
        <aside className={styles.sale}> Скидка!<br />-50%</aside>
    </article>
  )
}
