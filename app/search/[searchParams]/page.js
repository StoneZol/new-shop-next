// import styles from "./page.module.scss"; import ProductSearch from
// "@/features/product-search/ui/product-search";
import {getProductUrlApi} from "@/shared/api-endpoint/api-endpoint";
import {notFound} from "next/navigation";
import ProductsList from './../../../features/products-list/ui/products-list';

export default async function SearchPage({params}) {
    const {searchParams} = await params
    const res = await fetch(`${getProductUrlApi}?Name=${searchParams}&Sort=0&Page=1&PageLimit=24`);
    if (!res.ok) {
        notFound();
    }
    const productData = await res.json();

    return (<div>
        Результат поиска : {decodeURIComponent(searchParams)}
        <ProductsList products={productData.items}/>

    </div>);
}