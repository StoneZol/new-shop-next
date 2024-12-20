const {createSlice} = require("@reduxjs/toolkit")

const initialState = {
    products: [],
    fetchFlag: true,
    loaderFlag: false,
    currentProductPage: 1,
    totalProductPages: 1,
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
    }
})

export const {
    loadProducts,
    refreshProduct,
    setFetchFlag,
    setLoaderFlag,
    setCurrentProductPage,
    setTotalProductPages,
} = productsSlice.actions
export default productsSlice.reducer;