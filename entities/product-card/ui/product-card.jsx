import styles from './product-card.module.scss'
import { shop } from '@/shared/shop.config'
import Link from 'next/link'
import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card'
import TagBlock from '@/shared/mini-components/tag-block/ui/tag-block'
import DiscountTagLine from '@/shared/mini-components/tag-block/discount-tag-line/ui/discount-tag-line'
import PromoTagLine from '@/shared/mini-components/tag-block/promo-tag-line/ui/promo-tag-line'
import BuyPageBlock from '@/entities/buy-page-block/ui/buy-page-block'
import PriceModule from '@/entities/price-module/ui/price-module'

function ProductCard({product}) {
  return (
    <article className={styles.article}>
        <figure className={styles.figure}>
            <SwiperProductCard width={180} height={180} content={product.imageUrls} productID={product.id} productLink={`/product/${product.id}`}/>
        </figure>
        <header className={styles.header}>
            <Link href={`/product/${product.id}`}>
                <h2>{product.name}</h2>
            </Link>
        </header>
        <TagBlock>
            <DiscountTagLine discount={product.discount}/>
            <PromoTagLine promoTag={product.promotionTag}/>
        </TagBlock>
        <section className={styles.section}>
            <PriceModule units={product.units} discount={product.discount} price={product.price} totalPrice = {product.totalPrice}/>
        </section>
        <footer className={styles.footer}>
            <BuyPageBlock product={product}/>
        </footer> 
    </article>
  )
}

export default ProductCard