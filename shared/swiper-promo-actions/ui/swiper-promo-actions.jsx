'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-promo-actions.module.scss'
import {Pagination, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';


export default function SwiperPromoActions({width, height, content, redirect = true}) {
    if (!content ){
        return null
    }
    return (
        <Swiper
            pagination={{
                dynamicBullets: true
            }}
            loop={content.length > 1 ? true : false}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            className={styles.swiper}>
            {
                content.map((content, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            href={content ? `/promo/${content.urlPromo}` : '#'}
                            onClick={(e) => {
                                !redirect && e.preventDefault();
                            }}>
                            <Image
                                src={content.imageModalUrl}
                                alt={content.name}
                                quality={100}
                                width={width}
                                height={height}/>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}