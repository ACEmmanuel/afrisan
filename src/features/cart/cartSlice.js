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
        addItem: (state, action) => {
            const e = action.payload;
            state.items.push(e);
        },

        removeItem: (state, action) => {
            const e = action.payload;
            const s = state.items
            state.items = s.filter((k)=> k.id !== e.id)
        }

    }
})

export const {addItem, removeItem} = cartSlice.actions; 

export default cartSlice.reducer;