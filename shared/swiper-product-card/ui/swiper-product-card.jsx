'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './swiper-product.module.scss'
import {Pagination, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { useImageViewer } from './../../image-viewer/hooks/use-image-viewer';
import ImageViewer from '@/shared/image-viewer/ui/image-viewer';
import React ,{ memo }from 'react'


function SlideHasLink({ children, productLink}){
    if (!productLink) return children
    return(
        <Link href={productLink}>
            {children}
        </Link>
    )
}

const ImageHasSizes = memo(function ImageHasSizes({width, height, imageUrl, imageQuality}){
    if (!width || !height) {
        return(
            <Image
                src={imageUrl}
                alt={imageUrl}
                quality={imageQuality}
                fill={true}
                sizes="(max-width: 770px) 70vw, 100vw"
            />
        )
    }
    return(
        <Image
            src={imageUrl}
            alt={imageUrl}
            quality={imageQuality}
            width={width}
            height={height}
        />
    )
})

/**
 * Компонент SwiperProductCard
 * 
 * @param {Object} props - Свойства компонента.
 * @param {number} props.width - Ширина изображения в пикселях.
 * @param {number} props.height - Высота изображения в пикселях.
 * @param {string[]} props.content - Массив URL-адресов изображений для отображения в слайдере.
 * @param {number} [props.imageQuality=75] - Качество изображений (0-100), передаваемое в компонент Image. По умолчанию 75.
 * @param {string} [props.productLink] - Ссылка на продукт, если есть
 *  @param {boolean} [props.mousewheel] - Включение прокрутки колесиком
 *  @param {boolean} [viewer] -Включение вивера
 * 
 * @returns {JSX.Element} Возвращает JSX.
 */

export default function SwiperProductCard({width, height, content, imageQuality = 75, productLink, mousewheel=false, viewer=false}) {
    const { isViewerOpen, activeIndex, openViewer, closeViewer, content: viewerContent } = useImageViewer();
    return (
        <>
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            loop={content.length > 1 ? true : false}
            lazyPreloadPrevNext={true}
            lazy="true"
            mousewheel={mousewheel}
            modules={[Pagination, Mousewheel]}
            className={styles.swiper}>
                {content.map((imageUrl , index)=>(
                    <SwiperSlide key={index} onClick={() => viewer && openViewer({ index, content })}>
                        <SlideHasLink productLink={productLink}>
                            <ImageHasSizes 
                                width={width} 
                                height={height} 
                                imageQuality={imageQuality} 
                                imageUrl={imageUrl}/>
                        </SlideHasLink>
                    </SwiperSlide>
                ))}
        </Swiper>
    { viewer ? <ImageViewer isViewerOpen={isViewerOpen} activeIndex={activeIndex} content={viewerContent} exitEvent={closeViewer}/> : null}</>
    )
}