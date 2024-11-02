import { shop } from '@/shared/shopConfig'
import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <section className={styles.leftSide}><Link href={'#'}>{shop.name}</Link></section>
        <section className={styles.rightSide}><Link href={'#'}>Корзина</Link></section>
    </header>
  )
}
