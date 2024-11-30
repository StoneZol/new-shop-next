import AboutProduct from '@/entities/about-product/ui/about-product';
import React from 'react';
import styles from './page.module.scss'
import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card';
import NutritionalValue from '@/entities/nutritional-value/ui/nutritional-value';
import TagBlock from '@/shared/mini-components/tag-block/ui/tag-block';
import DiscountTagLine from '@/shared/mini-components/tag-block/discount-tag-line/ui/discount-tag-line';
import PromoTagLine from '@/shared/mini-components/tag-block/promo-tag-line/ui/promo-tag-line';
import BuyPriceWidget from '@/widgets/buy-price-widget/ui/buy-price-widget';

const ProductPage = ({params}) => {
    const {id} = params;

    const testData = {
        id: "8",
        imageNames: 'Picture name',
        name: '8 Elisenlebkuchen Nürnberger',
        price: 500,
        discount: 90,
        totalPrice: 50,
        promotionTag: '11.11',
        units: 'шт',
        description: 'Sonne',
        count: 0,
        category: "Конфеты",
        availability: true,
        imageUrls: [
            'https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg', 'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'
        ],
        description: {
            characteristic: [
                {
                    name: "Weight",
                    value: "1kg"
                }, {
                    name: "Color",
                    value: "Red"
                }, {
                    name: "Color",
                    value: "Red"
                }, {
                    name: "Color",
                    value: "Red"
                }, {
                    name: "Color",
                    value: "Red"
                }, {
                    name: "Color",
                    value: "Red"
                }
            ],
            about: "**Lorem ipsum dolor**  \n sit amet, consectetur adipiscing elit.  \n\t- Sed do" +
                    " eiusmod tempor incididunt ut labore et dolore magna aliqua.  \n\t- Ut enim ad" +
                    " minim veniam, quis nostrud exercitation ullamco laboris.",
            foodValue:{
                protein: "55",
                fat: "10",
                carbohydrate: "30",
                calories: "250"
             }
        }
    }

    return (
        <div className={styles.pageBox}>
            <section className={styles.page}>
                <div className={styles.sliderBox}>
                    <SwiperProductCard
                        width={340}
                        height={340}
                        imageQuality={100}
                        content={testData.imageUrls}/>
                    <TagBlock>
                        <DiscountTagLine discount={testData.discount}/>
                        <PromoTagLine promoTag={testData.promotionTag}/>
                    </TagBlock>
                </div>
                <section className={styles.aboutBox}>
                    <AboutProduct data={testData.description}/>
                    <NutritionalValue values={testData.description.foodValue}/>
                </section>
                <BuyPriceWidget product={testData}>
                    <h2 className={styles.h2}>{testData.name}</h2>
                </BuyPriceWidget>
            </section>
        </div>
    );
};

export default ProductPage;
