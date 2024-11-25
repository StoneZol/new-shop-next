'use client'
import { memo} from 'react'
import styles from './product-card.module.scss'
import { shop } from '@/shared/shop.сonfig'
import Link from 'next/link'
import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card'
import handleSelect from '@/shared/public-func/handle-select'
import { useBasket } from '@/shared/custom-hooks/use-basket'
import LetsIconsBasketAlt3 from '@/shared/icons/lets-icons-basket-alt3'
import TagBlock from '@/shared/mini-components/tag-block/ui/tag-block'
import DiscountTagLine from '@/shared/mini-components/tag-block/discount-tag-line/ui/discount-tag-line'
import PromoTagLine from '@/shared/mini-components/tag-block/promo-tag-line/ui/promo-tag-line'

const ProductCard = memo(function ProductCard({product}) {

    const { count, isZero, inputRef, addBasket, removeBasket, handleInputBasket } = useBasket(product);

  return (
    <article className={styles.article}>
        <figure className={styles.figure}>
            <SwiperProductCard width={180} height={180} content={product.imageUrls} productID={product.id}/>
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
            {product.discount == 0 ? 
            (<>
                <span className={styles.totalPrice}>{product.totalPrice}{shop.currency}</span>
                <span>/{product.units}</span>
            </>)
            :
            (<>
                <span className={styles.oldPrice}>{product.price}{shop.currency} </span> 
                <span className={styles.totalPrice}>{product.totalPrice}{shop.currency}</span>
                <span>/{product.units}</span>
            </>)}
        </section>
        <footer className={styles.footer}>
            {isZero ?
            (<button onClick={addBasket}> <LetsIconsBasketAlt3/> Купить </button>)
            :
            (<>
                <button aria-label="Уменьшить 1" onClick={removeBasket}>-</button>
                <input 
                ref={inputRef}
                type="number"
                value={count}
                min={0}
                max={999}
                onChange={handleInputBasket}
                onClick={handleSelect}/>
                <button aria-label="Добавить 1" onClick={addBasket}>+</button>
            </>)}
        </footer>
    </article>
  )
})

export default ProductCard