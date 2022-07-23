import { legacy_createStore as createStore, combineReducers } from 'redux';

import { cartReducer } from '../features/cart/cartSlice.js'; 
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

export const store = createStore(combineReducers({
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  inventory: inventoryReducer,
  searchTerm: searchTermReducer
}));