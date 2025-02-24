import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from 'next/navigation'
import { addQueries,removeAllQueries, removeOneQuery  } from "@/store-redux/slices/search-queries-slice";

export default function useProductSearch() {

    const [visibleBG, setVisibleBG] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');

    const searchQueries = useSelector((state) => state.searchQueries.searchQueries); 

    const dispatch = useDispatch();

    const inputRef = useRef(null)
    const path = usePathname();
    
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search/${searchQuery}`);
        }
        setVisibleBG(false)
        dispatch(addQueries([searchQuery]))
    };

    const handleLinkClick = (query) =>{
        setVisibleBG(false)
        dispatch(addQueries([query]))
    }

    const nullInput = () => {
        inputRef.current.value = ''
        setSearchQuery('')
        inputRef.current?.focus()
        setVisibleBG(true)
    }

    const delFunc = (query) => {
        dispatch(removeOneQuery(query))
    } 

     const delAllfunc = () => {
        dispatch(removeAllQueries())
     }

    useEffect(() => {
      if (path !=='/search'){
        inputRef.current.value = ''
        setSearchQuery('')
      }
      if (path.indexOf('/search/') > -1) {
        inputRef.current.value = decodeURIComponent(path.replace('/search/', ''))
        setSearchQuery(decodeURIComponent(path.replace('/search/', '')))
      }
    }, [path])

  return {
    visibleBG,
    searchQuery,
    searchQueries,
    inputRef,
    path,
    router,
    nullInput,
    handleLinkClick,
    handleSearch,
    dispatch,
    setVisibleBG,
    setSearchQuery,
    delFunc,
    delAllfunc,
  }
}
