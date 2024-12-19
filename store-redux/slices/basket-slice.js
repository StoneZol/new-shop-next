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
                existingItem.count = action.payload.count;
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
                existingItem.count = action.payload.count;
                if (existingItem.count === 0){
                    state.basket=state.basket.filter((item)=> item.id !== action.payload.id)
                }
            }
            else return
        },
        handleInBasket: (state, action)=>{
            const existingItem = state.basket.find(item => item.id === action.payload.id)
                if (existingItem){
                    existingItem.count=action.payload.count;
                    if (existingItem.count === 0){
                    state.basket=state.basket.filter((item)=> item.id !== action.payload.id)
                    }
            }
            else return
        },
        removeALLBasket: (state, _)=>{
            state.basket = [];
        },
        updateItemBasket: (state, action) => {
            state.basket = state.basket.map(item =>
                item.id === action.payload.id 
                    ? { ...action.payload, count: item.count } 
                    : item
            );
        }        
    }
})

export const {addToBasket, removeFromBasket,handleInBasket, removeALLBasket, updateItemBasket} = basketSlice.actions;
export default basketSlice.reducer;