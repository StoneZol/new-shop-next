import { shop } from '@/shared/shop.сonfig'
import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'
import PointBasketLength from '@/shared/point-basket-length/ui/point-basket-length'
import LetsIconsBasketAlt3 from '@/shared/icons/navigation/lets-icons-basket-alt3'
import ProductSearch from '@/features/product-search/ui/product-search'

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.leftSide}>
                <Link href={'/'}>{shop.name}</Link>
            </section>
            <section className={styles.center}>
                <ProductSearch/>
            </section>
            <section className={styles.rightSide}>
                <Link href={'/basket'}>Корзина<LetsIconsBasketAlt3/><PointBasketLength/></Link>
            </section>
        </header>
    )
}