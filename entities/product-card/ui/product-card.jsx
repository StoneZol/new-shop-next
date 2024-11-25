'use client'
import { memo} from 'react'
import styles from './product-card.module.scss'
import { shop } from '@/shared/shop.сonfig'
import Link from 'next/link'
import SwiperProductCard from '@/shared/swiper-product-card/ui/swiper-product-card'
import handleSelect from '@/shared/public-func/handle-select'
import { useBasket } from '@/shared/custom-hooks/use-basket'
import LetsIconsBasketAlt3 from '@/shared/icons/lets-icons-basket-alt3'

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
        {product.discount > 0 && <aside className={styles.sale}> Скидка! -{product.discount}%</aside>}
        {product.promotionTag && <aside className={styles.promotionTag}>{product.promotionTag}</aside> }
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