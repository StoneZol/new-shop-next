'use client'
import styles from './product-search.module.scss'
import SymbolsSearch from '@/shared/icons/symbol-search'
import { shopSearchText, shopSomeTranslate } from '@/shared/shop.config'
import { removeAllQueries, removeOneQuery } from '@/store-redux/slices/search-queries-slice'
import ProductSearchStory from '../product-search-story/ui/product-search-story'
import { DeleteInputText } from '@/shared/icons/delete-input-text'
import useProductSearch from '../hooks/use-product-search'

export default function ProductSearch() {

    const { visibleBG,
            searchQuery,
            searchQueries,
            inputRef,
            nullInput,
            handleLinkClick,
            handleSearch,
            setVisibleBG,
            setSearchQuery,
            delFunc,
            delAllfunc,
        } = useProductSearch();
    
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
                    onClick={handleSearch}
                    aria-label={shopSomeTranslate.search}>
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
                    delfunc={(query) =>delFunc(query)}
                    delAllfunc={() => delAllfunc()}/>
            }
        </div>
        {visibleBG && 
            <div className={styles.bg} onClick={()=>{setVisibleBG(false)}}></div>
        }
        </>
    )
}