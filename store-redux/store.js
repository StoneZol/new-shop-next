'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import basketSlice from "./slices/basket-slice";
import productsSlice from "./slices/products-slice";

const basketPersistConfig = {
    key: 'basket',
    storage,
    // blacklist: 'basket'
}

const prouctsPersistConfig = {
    key: 'products',
    storage,
    blacklist: ['products','fetchFlag']
}

const persistedBasket = persistReducer(basketPersistConfig, basketSlice);
const persistedProducts= persistReducer(prouctsPersistConfig, productsSlice);

const rootReducer = combineReducers({
    basket: persistedBasket,
    products: persistedProducts,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

