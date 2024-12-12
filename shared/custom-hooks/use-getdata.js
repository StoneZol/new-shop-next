import { useEffect, useState } from "react";
import { getData } from "../fetch-methods/fetch-methods";
import { getProductUrlApi } from "../api-endpoint/api-endpoint";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts,setCurrentProductPage, setFetchFlag, setLoaderFlag, setTotalProductPages } from "@/store-redux/slices/products-slice";
import scrollOnBootom from "../public-func/scroll-on-bottom";

export const useGetData = () => {
    const products = useSelector((state) => state.products.products); 
    const fetchFlag = useSelector((state) => state.products.fetchFlag); 
    const loaderFlag = useSelector((state)=> state.products.loaderFlag);
    
    const currentProductPage  = useSelector((state)=> state.products.currentProductPage);
    const totalProductPages = useSelector((state)=> state.products.totalProductPages);
    const currentSearchPage = useSelector((state)=> state.products.currentSearchPage);
    const totalSerchPages = useSelector((state)=> state.products.totalSerchPages);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchFlag) {
            getData(`${getProductUrlApi}?&Page=${currentProductPage}&PageLimit=18`)
            .then(result => {
                dispatch(loadProducts(result.items));
                dispatch(setTotalProductPages(result.totalPages));
                dispatch(setCurrentProductPage(currentProductPage+1));
                // setTotalPages(result.totalPages);
                // setCurrentPage(prevState=> prevState+1);
                return result;})
            .finally(() => {
                dispatch(setFetchFlag(false))
            });}
    }, [fetchFlag]);

    useEffect(() => {
        const handleScroll = (e) =>
        scrollOnBootom(e, 1000,
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

    return { products, loaderFlag };
};

// () => currentPage < totalPages && !fetchFlag