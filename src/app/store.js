import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import productsSlice from '../features/products/productsSlice'
import bagSlice from '../features/bag/bagSlice'
import checkoutSlice  from '../features/checkout/checkoutSlice'
export const store = configureStore({
  reducer: {
    products: productsSlice,
    bag: bagSlice,
    checkout: checkoutSlice,  
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, 
});
