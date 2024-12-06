'use client';
import ProductsList from '@/features/products-list/ui/products-list';
import { useGetData } from '@/shared/custom-hooks/use-getdata';
import { useSelector } from 'react-redux';

export default function GetterStartData({ children }) {
    const { products } = useGetData();

    return (
        <>
            <ProductsList products={products}/>
        </>
    );
}


