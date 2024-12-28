'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import basketSlice from "./slices/basket-slice";
import productsSlice from "./slices/products-slice";
import searchProductsSlice from "./slices/search-products-slice";
import categoriesSlice from "./slices/categories-slice";

const basketPersistConfig = {
    key: 'basket',
    storage,
    // blacklist: 'basket'
}

const productsPersistConfig = {
    key: 'products',
    storage,
    blacklist: [
        'products',
        'fetchFlag',
        'loaderFlag',
        'currentProductPage',
        'totalProductPages',
    ],
}

const searchProductsPersistConfig = {
    key: 'searchProducts',
    storage,
    blacklist: [
        'searchProducts',
        'serchFetchFlag',
        'serchLoaderFlag',
        'currentSearchPage',
        'totalSerchPages',
    ]
}

const categoriesPersistConfig = {
key: 'categories',
storage,
blacklist : 'categories'
}

const persistedSearchProducts = persistReducer(searchProductsPersistConfig, searchProductsSlice)
const persistedBasket = persistReducer(basketPersistConfig, basketSlice);
const persistedProducts = persistReducer(productsPersistConfig, productsSlice);
const persistedCategories = persistReducer(categoriesPersistConfig, categoriesSlice )

const rootReducer = combineReducers({
    basket: persistedBasket,
    products: persistedProducts,
    searchProducts: persistedSearchProducts,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

