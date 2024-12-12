const {createSlice} = require("@reduxjs/toolkit")

const initialState = {
    products: [],
    searchProducts: [],
    fetchFlag: true,
    loaderFlag: false,
    currentProductPage: 1,
    totalProductPages: 1,
    currentSearchPage: 1,
    totalSerchPages: 1,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            const newProducts = action
                .payload
                .filter((product) => !state.products.find((p) => p.id === product.id));
            state.products.push(...newProducts)
        },
        refreshProduct: (state, action) => {
            state.products = [action.payload]
        },
        setFetchFlag: (state, action) => {
            state.fetchFlag = action.payload;
        },
        setLoaderFlag: (state, action) => {
            state.loaderFlag = action.payload;
        },
        setCurrentProductPage: (state, action) => {
            state.currentProductPage = action.payload;
        },
        setTotalProductPages: (state, action) => {
            state.totalProductPages = action.payload;
        },
        setCurrentSearchPage: (state, action) => {
            state.currentSearchPage = action.payload;
        },
        setTotalSerchages: (state, action) => {
            state.totalSerchPages = action.payload;
        }
    }
})

export const {
    loadProducts,
    refreshProduct,
    setFetchFlag,
    setLoaderFlag,
    setCurrentProductPage,
    setTotalProductPages,
    setCurrentSearchPage,
    setTotalSerchages
} = productsSlice.actions
export default productsSlice.reducer;