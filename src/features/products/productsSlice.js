import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  startLoading,
  finishLoading,
  setError,
  clearError,
} = productsSlice.actions;

export default productsSlice.reducer;
