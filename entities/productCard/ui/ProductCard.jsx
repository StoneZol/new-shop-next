'use client'
import { memo,useRef, useState, useEffect} from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import { shop } from '@/shared/shopConfig'
import Link from 'next/link'
import { useDispatch} from 'react-redux'
import { addToBasket, removeFromBasket } from '@/lib/slices/basketSlice'
import SwiperProductCard from '@/shared/swiperProductCard/ui/SwiperProductCard'

const ProductCard = memo(function ProductCard({product}) {

    const [isZero, setIsZero] = useState(product.count===0)
    const [count, setCount] = useState(product.count);
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const addBasket = () => {
        const newCount = count + 1;
        setCount(newCount);
        dispatch(addToBasket({...product, count: newCount}));
    };

    const removeBasket = () => {
        if (count > 0 ){
            const newCount = count - 1;
            setCount(newCount);
            dispatch(removeFromBasket({...product, count: newCount}));
        }
      };

    const handleInputBasket = (e) => {
        let newCount = e.target.value === '' ? 0 : Math.min(Math.max(parseInt(e.target.value, 10), 0), 999);
        if (isNaN(newCount)) {
            newCount=0;
        }
        setCount(newCount);
      };

    const handleSelect = (e) => {
        e.target.select();
      };

    useEffect(() => {
        setIsZero(count === 0);

      }, [count]);
    

  return (
    <article className={styles.article}>
        <figure className={styles.figure}>
            <SwiperProductCard width={180} height={180}/>
        </figure>
        <header className={styles.header}>
            <Link href={'#'}>
                <h2>{product.name}</h2>
            </Link>
        </header>
        {product.discount > 0 && <aside className={styles.sale}> Скидка! -{product.discount}%</aside>}
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
            (<button onClick={addBasket}> Купить</button>)
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