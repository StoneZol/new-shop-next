'use client';
import ProductsList from '@/features/products-list/ui/products-list';
import SkeletonProductsList from '@/features/products-list/ui/skeleton-products-list';
import { useProductData } from '@/shared/custom-hooks/use-product-data';
import { ErrorBoundary } from 'react-error-boundary';

export default function GetterStartData({ children }) {
    const { products, loaderFlag, isError } = useProductData();

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


