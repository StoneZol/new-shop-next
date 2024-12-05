'use client'
import React, { useState } from 'react'
import styles from './product-search.module.scss'
import SymbolsSearch from '@/shared/icons/symbol-search'
import { shopSearchText } from '@/shared/shop.сonfig'
import Skeleton from 'react-loading-skeleton'


export default function ProductSearch() {
    const [visibleBG, setVisibleBG] = useState(false)
    return (
        <>
        <div className={styles.searchBox}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder={shopSearchText.text}
                    aria-label={shopSearchText.text} 
                    onClick={()=>setVisibleBG(true)}/>
                <button className={styles.button}><SymbolsSearch/></button>
                {visibleBG &&  <div className={styles.content}>
            <Skeleton  width={350} height={40}/> <Skeleton width={350} height={40}/> <Skeleton width={350} height={40}/>
                                </div>}
        </div>
        {visibleBG && <div className={styles.bg} onClick={()=>{setVisibleBG(false)}}>
            </div>}
        </>
    )
}