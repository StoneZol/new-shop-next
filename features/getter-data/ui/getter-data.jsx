'use client';
import { useGetData } from '@/shared/custom-hooks/use-getdata';
import ProductsList from '@/widgets/products-list/ui/products-list';
import React from 'react';

export default function GetterData({ children }) {
    const { products } = useGetData();

    return (
        <>
            <ProductsList products={products}/>
        </>
    );
}
