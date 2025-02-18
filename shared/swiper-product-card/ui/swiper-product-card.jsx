'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-product.module.scss'
import {Pagination, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Компонент SwiperProductCard
 * 
 * @param {Object} props - Свойства компонента.
 * @param {number} props.width - Ширина изображения в пикселях.
 * @param {number} props.height - Высота изображения в пикселях.
 * @param {string[]} props.content - Массив URL-адресов изображений для отображения в слайдере.
 * @param {number} [props.imageQuality=75] - Качество изображений (0-100), передаваемое в компонент Image. По умолчанию 75.
 * @param {string} [props.productID] - Идентификатор продукта. Если указан, изображение становится ссылкой на страницу товара. Если не указан, ссылка становится неактивной.
 * 
 * @returns {JSX.Element} Возвращает JSX.
 */
export default function SwiperProductCard({width, height, content, imageQuality, productLink, mousewheel=false}) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            loop={content.length > 1 ? true : false}
            lazyPreloadPrevNext={true}
            mousewheel={mousewheel}
            modules={[Pagination, Mousewheel]}
            className={styles.swiper}>
                {content.map((imageUrl , index)=>(
                    <SwiperSlide key={index}>
                        <Link href={productLink ? `${productLink}` : '#'} 
                                onClick={(e) => {!productLink && e.preventDefault();}}>
                            <Image
                                src={imageUrl}
                                alt={imageUrl}
                                quality={imageQuality ? imageQuality : 75}
                                width={width}
                                height={height}/>
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
