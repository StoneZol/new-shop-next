const {createSlice} = require("@reduxjs/toolkit")

const initialState = {
    searchProducts: [],
    searchFetchFlag: true,
    searchLoaderFlag: false,
    currentSearchPage: 1,
    totalSearchPages: 1,
}

const searchProductsSlice = createSlice({
    name: 'searchProducts',
    initialState,
    reducers:{
        loadSearchProducts: (state, action) => {
            const newProducts = action
                .payload
                .filter((product) => !state.searchProducts.find((p) => p.id === product.id));
            state.searchProducts.push(...newProducts)
        },
        setSearchFetchFlag: (state, action) => {
            state.searchFetchFlag = action.payload;
        },
        setSearchLoaderFlag: (state, action) => {
            state.searchLoaderFlag = action.payload;
        },
        setCurrentSearchPage: (state, action) => {
            state.currentSearchPage = action.payload;
        },
        setTotalSearchPages: (state, action) => {
            state.totalSearchPages = action.payload;
        }
    }
})

export const {
    loadSearchProducts,
    setSearchFetchFlag,
    setSearchLoaderFlag,
    setCurrentSearchPage,
    setTotalSearchPages,

} = searchProductsSlice.actions

export default searchProductsSlice.reducer 