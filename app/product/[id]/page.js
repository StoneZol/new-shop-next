import AboutProduct from '@/entities/about-product/ui/about-product';
import React from 'react';
import styles from './page.module.scss'
import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card';
import NutritionalValue from '@/entities/nutritional-value/ui/nutritional-value';
import BuyPageBlock from '@/entities/buy-page-block/ui/buy-page-block';
import TagBlock from '@/shared/mini-components/tag-block/ui/tag-block';
import DiscountTagLine from '@/shared/mini-components/tag-block/discount-tag-line/ui/discount-tag-line';
import PromoTagLine from '@/shared/mini-components/tag-block/promo-tag-line/ui/promo-tag-line';


const ProductPage = ({ params }) => {
  const { id } = params;

  const testData = {
    id: "8",
    imageNames: 'Picture name',
    name: '8ElisenlebkuchenNürnberger',
    price: 500,
    discount: 90,
    totalPrice: 50,
    promotionTag:'11.11',
    units: 'шт',
    description: 'Sonne',
    count: 0,
    category: "Конфеты",
    availability: true,
    imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg',
    'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'
   ] 
  }

  const mockNutritionalValues = {
    protein: "5",
    fat: "10",
    carbohydrate: "30",
    calories: "250"
  };

  return (
    <div className={styles.pageBox}>
      <h2>Страница продукта ID: {id}</h2>
      <p>Информация о продукте с ID {id}...</p>
      <section className={styles.page}>
        <div className={styles.sliderBox}>
            <SwiperProductCard width={300} height={300} imageQuality={100} content={testData.imageUrls}/>
            <TagBlock>
                <DiscountTagLine discount={testData.discount}/>
                <PromoTagLine promoTag={testData.promotionTag}/>
            </TagBlock>
        </div>
      <AboutProduct/>
      <NutritionalValue values={mockNutritionalValues}/>
      <BuyPageBlock product={testData}/>
      </section>
    </div>
  );
};

export default ProductPage;
