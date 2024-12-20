const {createSlice} = require("@reduxjs/toolkit")

const initialState ={
    categories: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        loadCategories: (state, action)=>{
            state.categories = action.payload;
        },
        zeroStateCategories: (state, _) =>{
            state.categories = [];
        }
    }
})

export const  {
    loadCategories, zeroStateCategories,
} = categoriesSlice.actions

export default categoriesSlice.reducer