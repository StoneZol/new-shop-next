'use client'
import { useBasket } from '@/shared/custom-hooks/use-basket';
import styles from './buy-page-block.module.scss'
import handleSelect from '@/shared/public-func/handle-select';
import LetsIconsBasketAlt3 from '@/shared/icons/navigation/lets-icons-basket-alt3';
import Link from 'next/link';
import IconPlus from '@/shared/icons/plus-icon';
import IconMinus from '@/shared/icons/minus-icon';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { shopBuyBlock } from '@/shared/shop.сonfig';


export default function BuyPageBlock({product, link=false}) {

const { count,setCount , isZero, inputRef, addBasket, removeBasket, handleInputBasket } = useBasket(product);

const basket = useSelector(state=>state.basket.basket)

 useEffect(() => {
   const current = basket.find((item)=>item.id ===product.id)
   if (current){
    setCount(current.count)
   }
 }, [basket, product.id])
 

  return (
    <section className={styles.section}>
    {isZero ?
    (<button onClick={addBasket}> <LetsIconsBasketAlt3/> {shopBuyBlock.buy}</button>)
    :
    (<div className={styles.if_in_basket}>
        {link ? (<Link href={'/basket'}>{shopBuyBlock.inBasket}</Link>):(<></>)}
        <button aria-label={shopBuyBlock.removeOne} onClick={removeBasket}><IconMinus/></button>
        <input 
        ref={inputRef}
        type="number"
        value={count}
        min={0}
        max={999}
        onChange={handleInputBasket}
        onClick={handleSelect}/>
        <button aria-label={shopBuyBlock.addBasket} onClick={addBasket}><IconPlus/></button>
    </div>)}
</section>
  )
}
