'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import basketSlice from "./slices/basketSlice";

const basketPersistConfig = {
    key: 'basket',
    storage,
    // blacklist: 'basket'
}

const persistedBasket = persistReducer(basketPersistConfig, basketSlice);

const rootReducer = combineReducers({
    basket: persistedBasket,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

