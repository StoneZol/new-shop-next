'use client'
import ProductsList from '@/features/products-list/ui/products-list';
import SkeletonProductsList from '@/features/products-list/ui/skeleton-products-list';
import { useSearchProductData } from '@/shared/custom-hooks/use-search-product-data';
import { ErrorBoundary } from 'react-error-boundary';

export default function GetterSearchData({}) {
    const {searchProducts, searchLoaderFlag, isError} = useSearchProductData();

    if (isError) {
        throw new Error("Не удалось загрузить продукты");
    }

  return (
    <>
    <ErrorBoundary>
        <ProductsList products={searchProducts}/>
        {searchLoaderFlag && searchProducts ? <SkeletonProductsList/> : null}
    </ErrorBoundary>
    </>
  )
}
