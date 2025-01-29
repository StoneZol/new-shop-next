import GetterSearchData from "@/widgets/getter-search-data/ui/getter-search-data";
import styles from './page.module.scss'
import { shopSearchText } from "@/shared/shop.сonfig";

export default async function SearchPage({params}) {
    const {searchParams} = await params;

    return (
    <>
        <div className={styles.search_result_text}>{shopSearchText.resultText} <span>{decodeURIComponent(searchParams)}</span></div>
        {searchParams ? <GetterSearchData/>: null}
    </>);
}