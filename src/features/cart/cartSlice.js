import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],           // Array to hold cart items, initially empty
    totalQuantity: 0,    // Total quantity of items in the cart, initially 0
    totalPrice: 0,       // Total price of the cart, initially 0.00
    currency: 'USD',     // Currency for prices, default is 'USD'
  },

  reducers: {
    // Adds an item to the cart
    addItem: (state, action) => {
      const newItem = action.payload; // New item to be added
      const presentItem = state.items.find((e) => e.id === newItem.id); // Check if item already exists in cart

      if (presentItem) {
        presentItem.quantity += 1; // If item exists, increase its quantity
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Otherwise, add the item with quantity 1
      }

      state.totalQuantity += 1; // Increase total quantity of items in cart

      // Update the total price by adding the price of the new item
      state.totalPrice = parseFloat((state.totalPrice + newItem.price).toFixed(2));
    },

    // Removes an item from the cart
    removeItem: (state, action) => {
      const itemId = action.payload; // ID of the item to be removed
      const item = state.items.find((e) => e.id === itemId); // Find the item in the cart

      if (item) {
        // Decrease totalQuantity by the quantity of the removed item
        state.totalQuantity -= item.quantity;

        // Decrease totalPrice by the price of all units of the removed item
        state.totalPrice = parseFloat((state.totalPrice - item.price * item.quantity).toFixed(2));

        // Remove the item from the array
        state.items = state.items.filter((k) => k.id !== itemId);

        // If there are no items left, reset totalPrice to 0
        if (state.items.length === 0) {
          state.totalPrice = 0;
        }
      }
    },

    // Increases the quantity of a specific item in the cart
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload.theID; // ID of the item to be increased
      const itemQty = action.payload.update; // Quantity to increase by
      const item = state.items.find((e) => e.id === itemId); // Find the item in the cart

      if (item) {
        if (item.quantity + itemQty <= 20) { // Check if adding does not exceed max (e.g., max 20)
          item.quantity += itemQty; // Increment item's quantity
          state.totalQuantity += itemQty; // Increment total cart quantity
          state.totalPrice = parseFloat((state.totalPrice + (item.price * itemQty)).toFixed(2)); // Update total price
        } else {
          console.log("Max quantity reached");
        }
      }
    },

    // Decreases the quantity of a specific item in the cart
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload.theID; // ID of the item to be decreased
      const itemQty = action.payload.update; // Quantity to decrease by
      const item = state.items.find((e) => e.id === itemId); // Find the item in the cart

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= itemQty; // Decrease item's quantity
          state.totalQuantity -= itemQty; // Decrease total cart quantity
          state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2)); // Update total price
        } else if (item.quantity === 1) {
          state.items = state.items.filter((k) => k.id !== itemId); // Remove item if quantity is 0
          state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2)); // Adjust total price
          state.totalQuantity -= itemQty; // Update total quantity
        }
      }
    },

    // Clears all items from the cart and resets the state
    clearCart: (state) => {
      state.items = []; // Remove all items from the cart
      state.totalQuantity = 0; // Reset total quantity
      state.totalPrice = 0.00; // Reset total price
    },
  },
});

export const { addItem, removeItem, clearCart, decreaseItemQuantity, increaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
