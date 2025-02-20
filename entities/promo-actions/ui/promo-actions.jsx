'use client'
import Image from 'next/image'
import styles from './promo-actions.module.scss'
import Link from 'next/link'

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination,Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperRight from '@/shared/icons/navigation/swiper-right';
import SwiperLeft from '@/shared/icons/navigation/swiper-left';

const dataMock = [
    {
        promoUrl: '#',
        imageUrl: 'https://www.mirf.ru/backend/wp-content/uploads/2025/01/dRIjyCzQYBWzhJZQERFGEVORJ0ncGbkdrqgmHjWT/x1536-y0.webp'
    },
    {
        promoUrl: '#',
        imageUrl: 'https://www.mirf.ru/backend/wp-content/uploads/2025/01/dRIjyCzQYBWzhJZQERFGEVORJ0ncGbkdrqgmHjWT/x1536-y0.webp'
    },
    {
        promoUrl: '#',
        imageUrl: 'https://www.mirf.ru/backend/wp-content/uploads/2025/01/dRIjyCzQYBWzhJZQERFGEVORJ0ncGbkdrqgmHjWT/x1536-y0.webp'
    }
]

function PromoNavigation(){
    return(
        <div className={styles.swiper_navigation}>
            <div className="prev_section"><SwiperLeft/></div>
            <div className="next_section"><SwiperRight/></div>
        </div>
    )
}

function SwiperPromo ({content, children}) {

    if (content.length < 1) return null;

    return(
        <Swiper
            pagination={{
                dynamicBullets: true
            }}
            loop={content.length > 1 ? true : false}
            navigation={{
                nextEl: '.next_section',
                prevEl: '.prev_section'
            }}
            slidesPerView= {1}
            modules={[Pagination,Navigation]}
            className={styles.swiper}>
            { content.map((item, index) => (
                <SwiperSlide key={index}>
                    {children(item)}
                </SwiperSlide>
            ))}   
        </Swiper>
    )
}

function BannerBlock({data}){
    return(
        <div className={styles.image_block}>
        <Link href={`/promo/${data.promoUrl}`}>
            <Image
                src={data.imageUrl}
                fill={true}
                sizes="(max-width: 690px) 100vw, 100vw"
                alt={data.promoUrl}
                quality={100}
                style={{
                    objectFit: "cover"
                }}/>
        </Link>
    </div>
    )
}

export default function PromoActions({ dataPromo = dataMock }) {
    return (
        <section className={styles.section}>
            <PromoNavigation/>
            <SwiperPromo content={dataPromo}>
                {(item)=> <BannerBlock data={item}/>}
            </SwiperPromo>
        </section>
    )
}
