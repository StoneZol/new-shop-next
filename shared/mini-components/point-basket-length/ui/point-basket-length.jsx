'use client'
import styles from './point-basket-length.module.scss'
import usePointBasketLength from '../hooks/use-point-basket-length'

export default function PointBasketLength() {

    const {basket, isClient} = usePointBasketLength();

    if (!isClient) {
        return null;
    }

    return (
    <> 
    {basket.length> 0 &&
        <span className={styles.span}>
            {
                basket.length > 999 ? '999+': `${basket.length}`
            }
        </span>
    }
    </>
  )
}
