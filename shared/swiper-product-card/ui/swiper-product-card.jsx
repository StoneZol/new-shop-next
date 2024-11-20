'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-product.module.scss'
import {Pagination, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

export default function SwiperProductCard({width, height, content, imageQuality, productID}) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            loop={content.length > 0 ? true : false}
            mousewheel={true}
            modules={[Pagination, Mousewheel]}
            className={styles.swiper}>
                {content.map((imageUrl , index)=>(
                    <SwiperSlide key={index}>
                        <Link href={productID ? `/product/${productID}` : '#'} 
                                onClick={(e) => {!productID && e.preventDefault();}}>
                            <Image
                                src={imageUrl}
                                alt={''}
                                quality={imageQuality ? imageQuality : 75}
                                width={width}
                                height={height}/>
                                
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
