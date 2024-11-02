const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    basket: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addTobasket: (state, action)=>{
            const existingItem = state.basket.find(item => item.id === action.payload.id)
            if (existingItem){
                existingItem.count +=1;
            }
            else {
                state.basket.push({
                    ...action.payload, count: 1
                })
            }
            state.basket.push({
                ...action.payload, count: action.payload.count++
            })
        }, 
        removeFromBasket: (state, action)=>{
            const existingItem= state.basket.find(item=> item.id === action.payload.id)
            if (existingItem){
                existingItem.count -=1;
            }
            else return
        }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;