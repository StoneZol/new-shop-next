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
        },
        zeroStateSearch: (state) => {
            state.searchProducts = [];
            state.searchFetchFlag = true;
            state.searchLoaderFlag = false;
            state.currentSearchPage = 1;
            state.totalSearchPages = 1;
        }
    }
})

export const {
    loadSearchProducts,
    setSearchFetchFlag,
    setSearchLoaderFlag,
    setCurrentSearchPage,
    setTotalSearchPages,
    zeroStateSearch,

} = searchProductsSlice.actions

export default searchProductsSlice.reducer 