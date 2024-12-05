const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    products: [],
    fetchFlag: true,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        loadProducts: (state, action)=> {
            state.products = [...state.products, ...action.payload]; 
        },
        refreshProduct: (state, action)=>{
            state.products = [action.payload]
        },
        loadProduct: (state, action)=> {
            state.fetchFlag = action.payload;
        }
    }
}) 

export const {loadProducts,refreshProduct,loadProduct} = productsSlice.actions
export default productsSlice.reducer;