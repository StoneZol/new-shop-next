'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-promo-actions.module.scss'
import {Pagination, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function SwiperPromoActions({content, redirect = true}) {

    const [width, setWidth] = useState(1140); // Начальная ширина
    const [height, setHeight] = useState(140); 

    useEffect(() => {
        function checkWidth() {
          const newWidth = window.innerWidth;
          if (newWidth < 770) {
            setWidth(375);
            setHeight(210);
          } else {
            setWidth(1140);
            setHeight(140);
          }
        }

        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => {
          window.removeEventListener('resize', checkWidth);
        };
      }, []);

    if (!content ){
        return null
    }
    return (
        <Swiper
            pagination={{
                dynamicBullets: true
            }}
            loop={content.length > 1 ? true : false}
            // slidesPerView= {2}
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
                                src={width > 769 ? content.imageBlockOutUrl : content.imageModalUrl}
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