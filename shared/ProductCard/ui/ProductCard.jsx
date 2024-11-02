'use client'
import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'

export default function ProductCard({product}) {
  return (
    <article className={styles.article}>
        <figure className={styles.figure}>
            <Image src={'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'} 
            alt='#' 
            width={150} 
            height={150}/>
        </figure>
        <header>
            <h2>Название товара</h2>
        </header>

        <section>
            Цена 800р
        </section>
        <footer className={styles.footer}>
            <button> Купить</button>
            {/* <button>-</button>
            <input type="number"
            min={0}
            max={999}/>
            <button>+</button> */}

        </footer>
    </article>
  )
}
