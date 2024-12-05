'use client';
import ProductsList from '@/features/products-list/ui/products-list';
import { useSelector } from 'react-redux';

export default function GetterStartData({ children }) {
    const products = useSelector((state) => state.products.products); 

    return (
        <>
            <ProductsList products={products}/>
        </>
    );
}


