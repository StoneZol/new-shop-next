const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    basket: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addToBasket: (state, action)=>{
            const existingItem = state.basket.find(item => item.id === action.payload.id)
            if (existingItem){
                existingItem.count =action.payload.count;
            }
            else {
                state.basket.push({
                    ...action.payload, count: 1
                })
            }
        }, 
        removeFromBasket: (state, action)=>{
            const existingItem= state.basket.find(item=> item.id === action.payload.id)
            if (existingItem){
                existingItem.count= action.payload.count;
                if (existingItem.count === 0){
                    state.basket=state.basket.filter((item)=> item.id !== action.payload.id)
                }
            }
            else return
        }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;