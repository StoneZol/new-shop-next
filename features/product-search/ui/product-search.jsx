import React from 'react'
import styles from './product-search.module.scss'
import SymbolsSearch from '@/shared/icons/symbol-search'
import { shopSearchText } from '@/shared/shop.сonfig'


export default function ProductSearch() {
    return (
        <div className={styles.searchBox}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder={shopSearchText.text}
                    aria-label={shopSearchText.text}/>
                <button className={styles.button}><SymbolsSearch/></button>
        </div>
    )
}