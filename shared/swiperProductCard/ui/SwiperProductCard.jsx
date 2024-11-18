'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiperProduct.module.scss'
import {Pagination, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

export default function SwiperProductCard({width, height, content}) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            loop={true}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            className={styles.swiper}>
            <SwiperSlide>
                <Link href={'#'}>
                    <Image
                        src={'https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg'}
                        alt={''}
                        width={width}
                        height={height}/>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={'#'}>
                    <Image
                        src={'https://wallpaper.forfun.com/fetch/74/74d2c5f8c46325771cab9ac7613fb04f.jpeg?h=' +
                                '900&r=0.5'}
                        alt={''}
                        width={width}
                        height={height}/>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href={'#'}>
                    <Image
                        src={'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'}
                        alt={''}
                        width={width}
                        height={height}/>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}
