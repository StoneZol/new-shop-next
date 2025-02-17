'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './product-search.module.scss'
import SymbolsSearch from '@/shared/icons/symbol-search'
import { shopSearchText } from '@/shared/shop.config'
import Skeleton from 'react-loading-skeleton'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { zeroStateSearch } from '@/store-redux/slices/search-products-slice'
import { addQueries, removeAllQueries, removeOneQuery } from '@/store-redux/slices/search-queries-slice'
import ProductSearchStory from '../product-search-story/ui/product-search-story'
import { DeleteInputText } from '@/shared/icons/delete-input-text'


export default function ProductSearch() {
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

    const nullInput = () =>{
        inputRef.current.value = ''
        setSearchQuery('')
        inputRef.current?.focus()
        setVisibleBG(true)
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
    
    return (
        <>
        <div className={styles.search_box}>
            <input
                type="text"
                ref={inputRef}
                className={styles.input}
                placeholder={shopSearchText.text}
                aria-label={shopSearchText.text}
                onChange={(e) => setSearchQuery(e.target.value)} 
                onClick={()=>setVisibleBG(true)}/>
            <button className={styles.button} 
                    onClick={handleSearch}>
                        <SymbolsSearch/>
            </button>
            {
                searchQuery.length > 0  &&
                    <button className={styles.button_input_delete}
                            onClick={nullInput}>
                    <DeleteInputText/>
                </button>
            }
            {visibleBG && searchQueries.length > 0 &&  
                <ProductSearchStory 
                    data={searchQueries.slice().reverse()} 
                    func={handleLinkClick}
                    delfunc={(query)=>dispatch(removeOneQuery(query))}
                    delAllfunc={()=> dispatch(removeAllQueries())}/>
            }
        </div>
        {visibleBG && 
            <div className={styles.bg} onClick={()=>{setVisibleBG(false)}}></div>
        }
        </>
    )
}