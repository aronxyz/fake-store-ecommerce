import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import productsSlice from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, 
});
