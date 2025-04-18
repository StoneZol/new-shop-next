import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card';
import styles from './page.module.scss';
import TagBlock from '@/shared/mini-components/tag-block/ui/tag-block';
import DiscountTagLine from '@/shared/mini-components/tag-block/discount-tag-line/ui/discount-tag-line';
import PromoTagLine from '@/shared/mini-components/tag-block/promo-tag-line/ui/promo-tag-line';
import AboutProduct from '@/entities/about-product/ui/about-product';
import BuyPriceWidget from '@/widgets/buy-price-widget/ui/buy-price-widget';
import {notFound} from 'next/navigation';
import {getProductUrlApi} from '@/shared/api-endpoint/api-endpoint';
import Breadcrumbs from '@/features/breadcrumbs/ui/breadcrumbs';
import SimilarGoods from '@/entities/any-variable-groups/ui/similar-goods/ui/similar-goods';

export const dynamic = "force-dynamic";

export default async function ProductPage({params}) {
    const {id} = await params
    const res = await fetch(`${getProductUrlApi}/${id}`);
    const similarGoods = await fetch(`${getProductUrlApi}?Sort=0&Page=2&PageLimit=8`)
    if (!res.ok) {
        notFound();
    }
    const productData = await res.json();
    const similarGoodsData = await similarGoods.json()

    return (
        <div className={styles.page_box}>
            <div className={styles.page_navigator}>
                <Breadcrumbs category={productData.category} sku={productData.sku}/>
            </div>
            <div className={styles.content_block}>
                <div className={styles.interactive_block}>
                    <div className={styles.interactive_sticky}>
                        <div className={styles.image_block}>
                            <SwiperProductCard
                                content={productData.imageUrls}
                                mousewheel={true}
                                viewer={true}/>
                                <TagBlock>
                                    <DiscountTagLine discount={productData.discount}/>
                                    <PromoTagLine promoTag={productData.promotionTag}/>
                                </TagBlock>   
                            </div>
                                <BuyPriceWidget product={productData}>
                                    <h2 className={styles.h2}>{productData.name}</h2>
                                </BuyPriceWidget>
                        </div>
                </div>
                <div className={styles.discription}>
                        <AboutProduct data={productData.description} category={productData.category} nutritional={productData.description.foodValue}/>
                </div>
            </div>
            <div className={styles.another_blocks}>
                <SimilarGoods data={similarGoodsData.items}/>
            </div>
        </div>
    )

    // return (
    //     <div className={styles.page_box}>
    //          <Breadcrumbs category={productData.category} sku={productData.sku}/>
    //         <section className={styles.page}>
    //             <div className={styles.left_side}>
    //                 <SwiperProductCard
    //                     imageQuality={100}
    //                     content={productData.imageUrls}
    //                     mousewheel={true}
    //                     viewer={true}/>
    //                 <TagBlock>
    //                     <DiscountTagLine discount={productData.discount}/>
    //                     <PromoTagLine promoTag={productData.promotionTag}/>
    //                 </TagBlock>
                    // <BuyPriceWidget product={productData}>
                    //     <h2 className={styles.h2}>{productData.name}</h2>
                    // </BuyPriceWidget>
                    // <NutritionalValue values={productData.description.foodValue}/>
    //             </div>
    //             <div className={styles.center_side}>
    //                 <AboutProduct data={productData.description} category={productData.category}/>
    //             </div>
    //             <div className={styles.right_side}>
    //             </div>
    //         </section>
    //         <SimilarGoods data={similarGoodsData.items}/>
    //     </div>
    // );
}