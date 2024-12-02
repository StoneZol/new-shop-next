'use client'
import BasketCount from '@/shared/basket-count/ui/basket-count'
import ProductsList from '@/widgets/products-list/ui/products-list'
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
