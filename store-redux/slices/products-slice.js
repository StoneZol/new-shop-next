const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        loadProducts: (state, action)=> {
            state.products = [...state.products, ...action.payload]; 
        }
    }
}) 

export const {loadProducts} = productsSlice.actions
export default productsSlice.reducer;