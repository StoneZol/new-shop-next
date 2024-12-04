'use client'
import ProductsList from '@/features/products-list/ui/products-list'
import BasketCount from '@/shared/basket-count/ui/basket-count'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function BasketWidget() {
    const basket = useSelector(state => state.basket.basket)
    if (!basket) {
        return  null;
    }
    return (
    <> 
        <ProductsList products = {basket} /> 
        <BasketCount basket= {basket}/>
    </>)
}
