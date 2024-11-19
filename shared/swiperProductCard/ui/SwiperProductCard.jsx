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
                {content.map((imageUrl , index)=>(
                    <SwiperSlide key={index}>
                        <Link href={'#'}>
                            <Image
                                src={imageUrl}
                                alt={''}
                                width={width}
                                height={height}/>
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
