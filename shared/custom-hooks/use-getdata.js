import { useEffect, useState } from "react";
import { getData } from "../fetch-methods/fetch-methods";
import { getProductUrlApi } from "../api-endpoint/api-endpoint";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "@/store-redux/slices/products-slice";

export const useGetData = () => {

    const products = useSelector((state) => state.products.products); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2)
    const [fetching, setFetching] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetching) {
            getData(`${getProductUrlApi}?Page=${currentPage}&PageLimit=24`).then(result => {
                dispatch(loadProducts(result.items));
                setTotalPages(result.totalPages);
                setCurrentPage(prevState=> prevState+1)
                return result;})
        .finally(() => {
            setFetching(false);
        });}
    }, [fetching]);


    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, [currentPage, setFetching]);

    const scrollHandler = (e) => {
        const scrollOffset =
            e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight);
            console.log(scrollOffset);

        if (scrollOffset < 10 && currentPage <= totalPages  && fetching) {
            setFetching(true);
        } 
    };


    return { products, setCurrentPage, setFetching };
};

