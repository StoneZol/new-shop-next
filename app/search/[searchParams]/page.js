import GetterSearchData from "@/widgets/getter-search-data/ui/getter-search-data";

export default async function SearchPage({params}) {
    const {searchParams} = await params;

    return (<div>
        Результат поиска : {decodeURIComponent(searchParams)}
        {searchParams ? <GetterSearchData/>: null}

    </div>);
}