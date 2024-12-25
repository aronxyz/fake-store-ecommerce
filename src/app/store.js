import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import productsSlice from '../features/products/productsSlice'
import bagSlice from '../features/bag/bagSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    bag: bagSlice,    
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, 
});
