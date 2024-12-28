import { useEffect, useState } from "react";
import { getData } from "../fetch-methods/fetch-methods";
import { getProductUrlApi } from "../api-endpoint/api-endpoint";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts,setCurrentProductPage, setFetchFlag, setLoaderFlag, setTotalProductPages } from "@/store-redux/slices/products-slice";
import scrollOnBootom from "../public-func/scroll-on-bottom";

export const useProductData = () => {
    const [isError, setIsError] = useState(false)
    
    const products = useSelector((state) => state.products.products); 
    const fetchFlag = useSelector((state) => state.products.fetchFlag); 
    const loaderFlag = useSelector((state)=> state.products.loaderFlag);
    const currentProductPage  = useSelector((state)=> state.products.currentProductPage);
    const totalProductPages = useSelector((state)=> state.products.totalProductPages);

    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchFlag && !isError) {
            getData(`${getProductUrlApi}?&Page=${currentProductPage}&PageLimit=24`)
            .then(result => {
                dispatch(loadProducts(result.items));
                dispatch(setTotalProductPages(result.totalPages));
                dispatch(setCurrentProductPage(currentProductPage+1));
                return result;})
            .catch(error => {setIsError(true)
                    throw new Error(error)})
            .finally(() => {
                dispatch(setFetchFlag(false))
            });}
    }, [fetchFlag,]);

    useEffect(() => {
        if (!isError) {
            dispatch(setFetchFlag(true))
        }
    }, [isError]);



    useEffect(() => {
        const handleScroll = (e) =>
        scrollOnBootom(e,
            () => dispatch(setFetchFlag(true)),
            () => currentProductPage <= totalProductPages && !fetchFlag
        );
        if(currentProductPage > 1 && fetchFlag){
            dispatch(setLoaderFlag(true))
        }
        if(currentProductPage > totalProductPages && !fetchFlag){
            dispatch(setLoaderFlag(false))
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [currentProductPage, fetchFlag]);
    console.log('хук отрабьотал на главной]')

    return { products, loaderFlag,  isError, setIsError };
};
