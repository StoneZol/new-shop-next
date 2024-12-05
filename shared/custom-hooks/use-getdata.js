import { useEffect, useState } from "react";
import { getData } from "../fetch-methods/fetch-methods";
import { getProductUrlApi } from "../api-endpoint/api-endpoint";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "@/store-redux/slices/products-slice";
import scrollOnBootom from "../public-func/scroll-on-bottom";

export const useGetData = () => {

    const products = useSelector((state) => state.products.products); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2)
    const [fetching, setFetching] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetching) {
            getData(`${getProductUrlApi}?Page=${currentPage}&PageLimit=6`).then(result => {
                dispatch(loadProducts(result.items));
                setTotalPages(result.totalPages);
                setCurrentPage(prevState=> prevState+1)
                return result;})
        .finally(() => {
            setFetching(false);
        });}
    }, [fetching]);

    useEffect(() => {
        const handleScroll = (e) =>
        scrollOnBootom(e, 10,
            () => setFetching(true),
            () => currentPage <= totalPages && !fetching
        );
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [currentPage, setFetching]);

    return { products, setCurrentPage, setFetching };
};