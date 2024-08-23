import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    
    initialState: {
        items: [],            // Array to hold cart items, initially empty
        totalQuantity: 0,     // Total quantity of items in the cart, initially 0
        totalPrice: 0.00,     // Total price of the cart, initially 0.00
        currency: 'USD',      // Currency for prices, default is 'USD'
    },

    reducers: {
        addCount: (state, action) => state + action.payload,
    }
})

export const {addCount} = cartSlice.actions; 

export default cartSlice.reducer;