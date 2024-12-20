import { loadSearchProducts, setCurrentSearchPage, setSearchFetchFlag, setSearchLoaderFlag, setTotalSearchPages } from "@/store-redux/slices/search-products-slice";
import { getProductUrlApi } from "../api-endpoint/api-endpoint";
import { getData } from "../fetch-methods/fetch-methods";
import scrollOnBootom from "../public-func/scroll-on-bottom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProductData = () => {

    const [category, setCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [isError, setIsError] = useState(false)

    const searchProducts = useSelector((state) => state.searchProducts.searchProducts); 
    const serchFetchFlag = useSelector((state) => state.searchProducts.serchFetchFlag); 
    const serchLoaderFlag = useSelector((state)=> state.searchProducts.serchLoaderFlag);
    const currentSearchPage  = useSelector((state)=> state.searchProducts.currentSearchPage);
    const totalSerchPages = useSelector((state)=> state.searchProducts.totalSerchPages);

    const dispatch = useDispatch();

    useEffect(() => {
        if (serchFetchFlag && !isError) {
            getData(`${getProductUrlApi}?&Page=${currentSearchPage}&PageLimit=24`)
            .then(result => {
                dispatch(loadSearchProducts(result.items));
                dispatch(setTotalSearchPages(result.totalPages));
                dispatch(setCurrentSearchPage(currentSearchPage+1));
                return result;})
            .catch(error => {setIsError(true)})
            .finally(() => {
                dispatch(setSearchFetchFlag(false))
            });}
    }, [serchFetchFlag,]);

    useEffect(() => {
        if (!isError) {
            dispatch(setSearchFetchFlag(true))
        }
    }, [isError]);



    useEffect(() => {
        const handleScroll = (e) =>
        scrollOnBootom(e,
            () => dispatch(setSearchFetchFlag(true)),
            () => currentSearchPage <= totalSerchPages && !serchFetchFlag
        );
        if(currentSearchPage > 1 && serchFetchFlag){
            dispatch(setSearchLoaderFlag(true))
        }
        if(currentSearchPage > totalSerchPages && !serchFetchFlag){
            dispatch(setSearchLoaderFlag(false))
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [currentSearchPage, serchFetchFlag]);

    return { searchProducts, serchLoaderFlag,  isError, setIsError };
};