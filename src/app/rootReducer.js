import { combineReducers } from 'redux';
import Cart from '../features/cart/cartSlice';

export const rootReducer = combineReducers({
  cart: Cart,
});
