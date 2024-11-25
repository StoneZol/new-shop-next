import AboutProduct from '@/entities/about-product/ui/about-product';
import React from 'react';
import styles from './page.module.scss'
import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card';
import NutritionalValue from '@/entities/nutritional-value/ui/nutritional-value';
import BuyPageBlock from '@/entities/buy-page-block/ui/buy-page-block';


const ProductPage = ({ params }) => {
  const { id } = params;

  const testData = {
    id: "6",
    imageNames: 'Picture name',
    name: 'Elisenlebkuchen Nürnberger',
    price: 500,
    discount: 90,
    totalPrice: 50,
    units: 'шт',
    description: 'Sonne',
    count: 0, 
    category: "Конфеты",
    availability: true,
    imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg',
    'https://wallpaper.forfun.com/fetch/74/74d2c5f8c46325771cab9ac7613fb04f.jpeg?h=900&r=0.5',
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
        </div>
      <AboutProduct/>
      <NutritionalValue values={mockNutritionalValues}/>
      <BuyPageBlock product={testData}/>
      </section>
    </div>
  );
};

export default ProductPage;
