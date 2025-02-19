import { shop } from '@/shared/shop.config'
import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'
import LetsIconsBasketAlt3 from '@/shared/icons/navigation/lets-icons-basket-alt3'
import ProductSearch from '@/features/product-search/ui/product-search'
import PointBasketLength from '@/shared/mini-components/point-basket-length/ui/point-basket-length'

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.left_side}>
                <Link href={'/'}>{shop.name}</Link>
            </section>
            <section className={styles.center}>
                <ProductSearch/>
            </section>
            <section className={styles.right_side}>
                <Link href={'/basket'}>{shop.basketLinkText}
                    <LetsIconsBasketAlt3/>
                    <PointBasketLength/>
                </Link>
            </section>
        </header>
    )
}