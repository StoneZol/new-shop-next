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
import Breadcrumbs from '@/features/breadcrumbs/ui/breadcrumbs';
import SkeletonBreadcrumbs from '@/features/breadcrumbs/ui/skeleton-breadcrumbs';
import ImageViewer from './../../../shared/image-viewer/ui/image-viewer';

export const dynamic = "force-dynamic";

export default async function ProductPage({params}) {
    const {id} = await params
    const res = await fetch(`${getProductUrlApi}/${id}`);
    if (!res.ok) {
        notFound();
    }
    const productData = await res.json();

    return (
        <div className={styles.page_box}>
             <Breadcrumbs category={productData.category} sku={productData.sku}/>
            <section className={styles.page}>
                <div className={styles.left_side}>
                    <SwiperProductCard
                        imageQuality={100}
                        content={productData.imageUrls}
                        mousewheel={true}
                        viewer={true}/>
                    <TagBlock>
                        <DiscountTagLine discount={productData.discount}/>
                        <PromoTagLine promoTag={productData.promotionTag}/>
                    </TagBlock>
                </div>
                <div className={styles.center_side}>
                    <AboutProduct data={productData.description} category={productData.category}/>
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