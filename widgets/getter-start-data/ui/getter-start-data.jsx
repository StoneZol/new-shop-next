'use client';
import ProductsList from '@/features/products-list/ui/products-list';
import SkeletonProductsList from '@/features/products-list/ui/skeleton-products-list';
import { useGetData } from '@/shared/custom-hooks/use-getdata';
import { useEffect } from 'react';

export default function GetterStartData({ children }) {
    const { products, loaderFlag } = useGetData();
    useEffect(() => {
    }, [])
    
    return (
        <>
            <ProductsList products={products}/>
            {loaderFlag && products ? <SkeletonProductsList/>: null}
        </>
    );
}


