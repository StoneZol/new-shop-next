import { shop } from '@/shared/shopConfig'
import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'
import PointBasketLength from '@/shared/point-basket-length/ui/point-basket-length'

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.leftSide}>
                <Link href={'/'}>{shop.name}</Link>
            </section>
            <section className={styles.rightSide}>
                <Link href={'/basket'}>Корзина<LetsIconsBasketAlt3/><PointBasketLength/></Link>
            </section>
        </header>
    )
}

function LetsIconsBasketAlt3() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24">
            <g fill="none">
                <path
                    stroke="#23061d"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M4 4h1.626c.567 0 .85 0 1.076.124a1 1 0 0 1 .25.195c.175.189.244.464.381 1.014l.182.727c.101.404.152.606.23.776a2 2 0 0 0 1.446 1.13C9.375 8 9.583 8 10 8v0"></path>
                <path
                    stroke="#23061d"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 17H7.55c-.145 0-.218 0-.274-.006a1 1 0 0 1-.867-1.203a3 3 0 0 1 .081-.262v0c.052-.154.077-.231.106-.3a2 2 0 0 1 1.698-1.224C8.368 14 8.45 14 8.611 14H14"></path>
                <path
                    stroke="#23061d"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M14.528 14h-3.554c-1.216 0-1.824 0-2.293-.275a2 2 0 0 1-.521-.442c-.35-.418-.45-1.018-.649-2.217c-.203-1.215-.304-1.823-.063-2.273a1.5 1.5 0 0 1 .408-.482C8.26 8 8.876 8 10.108 8h6.656c1.45 0 2.175 0 2.469.474c.293.475-.032 1.123-.68 2.42l-.447.895c-.538 1.076-.807 1.614-1.29 1.912c-.484.299-1.085.299-2.288.299Z"></path>
                <circle cx={17} cy={20} r={1} fill="#23061d"></circle>
                <circle cx={9} cy={20} r={1} fill="#23061d"></circle>
            </g>
        </svg>
    );
}