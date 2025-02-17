'use client'
import ProductsList from '@/features/products-list/ui/products-list'
import BasketCount from '@/shared/basket-count/ui/basket-count'
import { getData, updateItem } from '@/shared/fetch-methods/fetch-methods'
import { updateItemBasket } from '@/store-redux/slices/basket-slice'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shopBasket } from '../../../shared/shop.config';
import Link from 'next/link'
import styles from './basket-widget.module.scss'

export default function BasketWidget() {
    const basket = useSelector((state) => state.basket.basket);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // useEffect(() => {
    //     const updateBasket = async () => {
    //         if (basket.length > 0) {
    //             try {
    //                 const updatedItems = await Promise.all(
    //                     basket.map(i =>
    //                         getData(`https://gc2lch20-5267.euw.devtunnels.ms/Products/${i.id}`)
    //                     )
    //                 );
    //                 updatedItems.forEach(result => dispatch(updateItemBasket(result)));
    //             } catch (error) {
    //                 console.error("Error updating basket:", error);
    //             }
    //         }
    //     };
    
    //     updateBasket();
    // }, []);
    
    

    if (!isMounted) return <div className={styles.widget_compose}><h3>{shopBasket.basketIsNull}</h3></div>;

    return (
        <div className={styles.widget_compose}>
            {basket.length > 0 ? <ProductsList products={basket} /> : null}
            <div className={styles.static}>
                <BasketCount basket={basket} zeroStateTaxt={shopBasket.basketIsNull}/>
                {basket.length > 0 ? <Link  className={styles.create_order} href='/basket/create-order'>{shopBasket.basketCreateOrderText}</Link> : null}
            </div>
        </div>
    );
}
