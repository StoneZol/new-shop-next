'use client';
import ProductsList from '@/features/products-list/ui/products-list';
import SkeletonProductsList from '@/features/products-list/ui/skeleton-products-list';
import { useGetData } from '@/shared/custom-hooks/use-getdata';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function GetterStartData({ children }) {
    const { products, loaderFlag, isError } = useGetData();

    if (isError) {
        throw new Error("Не удалось загрузить продукты");
    }
    
    return (
        <>
        <ErrorBoundary>
            <ProductsList products={products}/>
            {loaderFlag && products ? <SkeletonProductsList/>: null}
        </ErrorBoundary>
        </>
    );
}


