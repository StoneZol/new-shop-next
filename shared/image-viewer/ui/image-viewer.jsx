'use client'
import React, {useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createPortal } from "react-dom";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs ,Mousewheel} from 'swiper/modules';
import Image from 'next/image';
import styles from './image-viewer.module.scss'
import CloseIcon from '@/shared/icons/close-icon';
import { shopDefaultAriaLabels } from './../../shop-module-translate';
import SwiperNavigator from '@/shared/swiper-navigator/ui/swiper-navigator';

export default function ImageViewer({isViewerOpen= false, activeIndex, content, exitEvent}) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (!isViewerOpen) {
      setThumbsSwiper(null);
    }
  }, [isViewerOpen]);

  if (!isViewerOpen || !content) return null;
  return createPortal(
    <dialog className={styles.viewer_compose}>
      <Swiper
        navigation={{
          nextEl: '.next_viever',
          prevEl: '.prev_viewer'
        }}
        initialSlide={activeIndex} 
        loop={true}
        spaceBetween={10}
        mousewheel={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation,Mousewheel, Thumbs]}
        className={styles.swiper}
      >
    <SwiperNavigator prevClassName='prev_viewer' 
                      nextClassName='next_viever' 
                      swiper_nav_hook={styles.swiper_navigation}/>
    {content.map((imageUrl , index)=>(
        <SwiperSlide key={index}>
            <Image
                src={imageUrl}
                alt={imageUrl}
                quality={100}
                fill={true}
                sizes="(max-width: 770px) 70vw, 100vw"
                style={{
                    objectFit: 'contain'
                }}
            />
      </SwiperSlide>
    ))}
     <button className={styles.button_close} 
            onClick={exitEvent} 
            aria-label={shopDefaultAriaLabels.close}>
                <CloseIcon/>
    </button>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView='auto'
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiper_thumb}
      >
        {content.map((imageUrl , index)=>(
        <SwiperSlide key={index} style={{width:'100px'}}>
            <Image
                src={imageUrl}
                alt={imageUrl}
                quality={100}
                width={100}
                height={100}
                style={{
                    objectFit: 'contain'
                }}
            />
      </SwiperSlide>
))}
      </Swiper>
    </dialog>,
    document.body
  );
}