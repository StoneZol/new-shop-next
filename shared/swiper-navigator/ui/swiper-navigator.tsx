import React from 'react'
import styles from './swiper-navigator.module.scss'
import SwiperLeft from '@/shared/icons/navigation/swiper-left'
import SwiperRight from '@/shared/icons/navigation/swiper-right'
import { shopDefaultAriaLabels } from '@/shared/shop-module-translate'

interface SwiperNavigatorProps{
    prevClassName: string,
    nextClassName: string,
    swiper_nav_hook: string
}

export default function SwiperNavigator({prevClassName, nextClassName , swiper_nav_hook}: SwiperNavigatorProps) {
    if (!prevClassName || !nextClassName) return null
    return (
        <div className={`${styles.swiper_navigation} ${swiper_nav_hook}`}>
            <div className={prevClassName} aria-label={shopDefaultAriaLabels.prev}><SwiperLeft/></div>
            <div className={nextClassName} aria-label={shopDefaultAriaLabels.next}><SwiperRight/></div>
        </div>
    )
}
