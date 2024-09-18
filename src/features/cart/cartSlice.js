import { createSlice } from '@reduxjs/toolkit';

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
      const newItem = action.payload;
      const presentItem = state.items.find((e) => e.id === newItem.id);

      if (presentItem) {
        presentItem.quantity += 1;  // Increment quantity for existing item
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.items.find((e) => e.id === itemId);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        // Remove the item from the array
        state.items = state.items.filter((k) => k.id !== itemId);
      }
    },

    clearCart: (state) => {
      // Reset cart to initial state
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0.00;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
