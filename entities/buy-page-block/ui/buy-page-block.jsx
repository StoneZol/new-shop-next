'use client'
import { useBasket } from '@/shared/custom-hooks/use-basket';
import styles from './buy-page-block.module.scss'
import handleSelect from '@/shared/public-func/handle-select';
import LetsIconsBasketAlt3 from '@/shared/icons/lets-icons-basket-alt3';
import Link from 'next/link';


export default function BuyPageBlock({product}) {

const { count, isZero, inputRef, addBasket, removeBasket, handleInputBasket } = useBasket(product);

  return (
    <section className={styles.section}>
    {isZero ?
    (<button onClick={addBasket}> <LetsIconsBasketAlt3/> Купить</button>)
    :
    (<div className={styles.ifInBasket}>
        <Link href={'/basket'}>В корзину</Link>
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
    </div>)}
</section>
  )
}
