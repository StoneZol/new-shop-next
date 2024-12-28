import { loadSearchProducts, setCurrentSearchPage, setSearchFetchFlag, setSearchLoaderFlag, setTotalSearchPages, zeroStateSearch } from "@/store-redux/slices/search-products-slice";
import { getProductUrlApi } from "../api-endpoint/api-endpoint";
import { getData } from "../fetch-methods/fetch-methods";
import scrollOnBootom from "../public-func/scroll-on-bottom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export const useSearchProductData = () => {
    const [isError, setIsError] = useState(false)
    
    const path = usePathname();

    const searchProducts = useSelector((state) => state.searchProducts.searchProducts); 
    const searchFetchFlag = useSelector((state) => state.searchProducts.searchFetchFlag); 
    const searchLoaderFlag = useSelector((state)=> state.searchProducts.searchLoaderFlag);
    const currentSearchPage  = useSelector((state)=> state.searchProducts.currentSearchPage);
    const totalSearchPages = useSelector((state)=> state.searchProducts.totalSearchPages);

    const dispatch = useDispatch();

    useEffect(() => {
        if (searchFetchFlag && !isError) {
            getData(`${getProductUrlApi}?Name=${path.replace('/search/', '')}&Sort=0&Page=${currentSearchPage}&PageLimit=24`)
            .then(result => {
                dispatch(loadSearchProducts(result.items));
                dispatch(setTotalSearchPages(result.totalPages));
                dispatch(setCurrentSearchPage(currentSearchPage+1));})
            .catch(error => {setIsError(true)
                    throw new Error(error)})
            .finally(() => {
                dispatch(setSearchFetchFlag(false))
            });}
    }, [searchFetchFlag]);

    useEffect(() => {
      dispatch(zeroStateSearch())
    }, [path])
    

    useEffect(() => {
        if (!isError) {
            dispatch(setSearchFetchFlag(true))
        }
    }, [isError]);

    useEffect(() => {
        const handleScroll = (e) =>
        scrollOnBootom(e,
            () => dispatch(setSearchFetchFlag(true)),
            () => currentSearchPage <= totalSearchPages && !searchFetchFlag
        );
        if(currentSearchPage > 1 && searchFetchFlag){
            dispatch(setSearchLoaderFlag(true))
        }
        if(currentSearchPage > totalSearchPages && !searchFetchFlag){
            dispatch(setSearchLoaderFlag(false))
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [currentSearchPage, searchFetchFlag]);
    return { searchProducts, searchLoaderFlag,  isError, setIsError};
};