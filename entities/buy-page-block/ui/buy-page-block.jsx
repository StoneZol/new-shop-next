'use client'
import styles from './buy-page-block.module.scss'
import handleSelect from '@/shared/public-func/handle-select';
import LetsIconsBasketAlt3 from '@/shared/icons/navigation/lets-icons-basket-alt3';
import Link from 'next/link';
import IconPlus from '@/shared/icons/plus-icon';
import IconMinus from '@/shared/icons/minus-icon';
import { shopBuyBlock } from '@/shared/shop.config';
import useBuyPageBlock from '../hooks/use-buy-page-block';

function BasketLink({link}) {
    if (link) {
        return <Link href={'/basket'}>{shopBuyBlock.inBasket}</Link>
    }
    return null
}

function ZeroStateBlock({onClick}) {
    return (
        <button onClick={onClick}>
            <LetsIconsBasketAlt3/> {shopBuyBlock.buy}</button>
    )
}

export default function BuyPageBlock({product, link = false}) {

  const { count, 
          isZero, 
          inputRef, 
          addBasket, 
          removeBasket, 
          handleInputBasket 
        } = useBuyPageBlock(product);

  if (isZero || count === 0) return <section className={styles.section}><ZeroStateBlock onClick={addBasket}/></section>

  return (
    <section className={styles.section}>
      <div className={styles.if_in_basket}>
            <BasketLink link={link}/>
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
        </div>
    </section>
  );
}