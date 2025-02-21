'use client'
import Image from 'next/image'
import styles from './promo-actions.module.scss'
import Link from 'next/link'

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination,Navigation,Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperRight from '@/shared/icons/navigation/swiper-right';
import SwiperLeft from '@/shared/icons/navigation/swiper-left';
import AdLegalView from '@/shared/mini-components/ad-legal-view/ui/ad-legal-view';

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
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            slidesPerView= {1}
            modules={[Pagination,Navigation,Autoplay]}
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
                sizes="(max-width: 770px) 70vw, 100vw"
                alt={data.promoUrl}
                priority
                quality={100}
                style={{
                    objectFit: "cover"
                }}/>
        </Link>
        <AdLegalView data={data.ad}/>
    </div>
    )
}

export default function PromoActions({ dataPromo = []}) {
    return (
        <section className={styles.section}>
            <PromoNavigation/>
            <SwiperPromo content={dataPromo}>
                {(item)=> <BannerBlock data={item}/>}
            </SwiperPromo>
        </section>
    )
}
