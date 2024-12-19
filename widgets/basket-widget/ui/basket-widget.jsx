'use client'
import ProductsList from '@/features/products-list/ui/products-list'
import BasketCount from '@/shared/basket-count/ui/basket-count'
import { getData, updateItem } from '@/shared/fetch-methods/fetch-methods'
import { updateItemBasket } from '@/store-redux/slices/basket-slice'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
    
    

    if (!isMounted) return <h3>Корзина пуста :&#40;</h3>;

    return (
        <>
            {basket.length > 0 ? <ProductsList products={basket} /> : null}
            <BasketCount basket={basket} />
        </>
    );
}
