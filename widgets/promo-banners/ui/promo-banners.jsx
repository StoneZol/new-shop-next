'use client'
import SwiperPromoActions from '@/shared/swiper-promo-actions/ui/swiper-promo-actions'
import styles from './promo-banners.module.scss'
import { useEffect } from 'react';

export default function PromoBanners() {
const testData= {
    actions: [
        {
            id: 1,
            name: '11.11',
            urlPromo: '11.11',
            imageBlockOutUrl: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/2880_0412_pvz.webp',
            imageModalUrl: 'https://photobooth.cdn.sports.ru/preset/message/2/01/c2419c47b495da8ecc57facda7c6d.jpeg',
        },
        {
            id: 2,
            name: 'Новый Год',
            urlPromo: 'Noviy_God',
            imageBlockOutUrl: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/ng_2880_0512.webp',
            imageModalUrl:'https://www.goha.ru/s/E:CO/go/UsMktqXJ79.jpg',
        },
        {
            id: 3,
            name: '1 Сентября',
            urlPromo: '1_Sentyabrya',
            imageBlockOutUrl: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/pvz_new_2880.webp',
            imageModalUrl:'https://www.ifoto.ai/_nuxt/img/ai-anime-generator-column-1.de232a4.webp',
        },
    ]
}

    useEffect(() => {
        function checkWidth(e){
          console.log(window.innerHeight);
          return window.innerHeight
        }
      document.addEventListener('resize', checkWidth)
        return () => {
          document.removeEventListener('resize', checkWidth)
        }
      }, [])

  return (
    <section className={styles.section}>
      <SwiperPromoActions content={testData.actions}/>
    </section>
  )
}
