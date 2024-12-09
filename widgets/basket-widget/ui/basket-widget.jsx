'use client'
import ProductsList from '@/features/products-list/ui/products-list'
import BasketCount from '@/shared/basket-count/ui/basket-count'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function BasketWidget() {
    const basket = useSelector((state) => state.basket.basket);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <h3>Корзина пуста :&#40;</h3>; // Ничего не рендерить на сервере

    return (
        <>
            {basket.length > 0 ? <ProductsList products={basket} /> : null}
            <BasketCount basket={basket} />
        </>
    );
}
