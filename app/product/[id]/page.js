import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card';
import styles from './page.module.scss';
import TagBlock from '@/shared/mini-components/tag-block/ui/tag-block';
import DiscountTagLine from '@/shared/mini-components/tag-block/discount-tag-line/ui/discount-tag-line';
import PromoTagLine from '@/shared/mini-components/tag-block/promo-tag-line/ui/promo-tag-line';
import AboutProduct from '@/entities/about-product/ui/about-product';
import NutritionalValue from '@/entities/nutritional-value/ui/nutritional-value';
import BuyPriceWidget from '@/widgets/buy-price-widget/ui/buy-price-widget';
import {notFound} from 'next/navigation';
import {getProductUrlApi} from '@/shared/api-endpoint/api-endpoint';

export async function generateStaticParams() {
    try {
        const response = await fetch(`${getProductUrlApi}?Page=1&PageLimit=50`);
        if (!response.ok) {
            console.error('Failed to fetch data from the server:', response.statusText);
            return [];
        }
        const products = await response.json();
        return products.items.map(product => ({
            id: product.id.toString(),
        }));
    } catch (error) {
        console.error('Error while fetching static params:', error.message);
        return [];
    }
}

export default async function ProductPage({params}) {
    const resolvedParams = await params;
    const {id} = resolvedParams;
    const res = await fetch(`${getProductUrlApi}/${id}`);
    if (!res.ok) {
        notFound();
    }
    const productData = await res.json();

    return (
        <div className={styles.page_box}>
            <section className={styles.page}>
                <div className={styles.left_side}>
                    <SwiperProductCard
                        width={340}
                        height={340}
                        imageQuality={100}
                        content={productData.imageUrls}
                        mousewheel={true}/>
                    <TagBlock>
                        <DiscountTagLine discount={productData.discount}/>
                        <PromoTagLine promoTag={productData.promotionTag}/>
                    </TagBlock>
                </div>
                <div className={styles.center_side}>
                    <AboutProduct data={productData.description}/>
                </div>
                <div className={styles.right_side}>
                    <BuyPriceWidget product={productData}>
                        <h2 className={styles.h2}>{productData.name}</h2>
                    </BuyPriceWidget>
                    <NutritionalValue values={productData.description.foodValue}/>
                </div>
            </section>
        </div>
    );
}