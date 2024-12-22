import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  minPrice: 0,
  maxPrice: 0,
  priceRange: { min: 0, max: 0 },
  isSorted: false, // Tracks if sorting is active
  isFiltered: false, // Tracks if filtering is active
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = [...action.payload].sort((a, b) => b.rating.rate - a.rating.rate);

      // Update minPrice and maxPrice dynamically
      const prices = action.payload.map(product => product.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      state.minPrice = minPrice;
      state.maxPrice = maxPrice;

      // Initialize priceRange and filteredProducts
      state.priceRange = { min: minPrice, max: maxPrice };

      state.isSorted = false;
      state.isFiltered = false;
    },
    setPriceRangeFilter(state, action) {
      const { min, max } = action.payload;
      state.priceRange = { min, max };

      // Filter products immediately after setting price range
      state.filteredProducts = state.products.filter(
        product => product.price >= min && product.price <= max
      );
      state.isFiltered = true;
    },
    resetPriceRangeFilter(state) {
      state.priceRange = { min: state.minPrice, max: state.maxPrice };
      state.filteredProducts = []
      state.isFiltered = false;
    },
    sortProducts(state, action) {
      if (!state.filteredProducts.length) {
        state.filteredProducts = [...state.products]; // Assign all products as a fallback
      }
      
      const { order } = action.payload; // 'asc', 'desc', or 'default'
      
      if (order === 'asc') {
        state.filteredProducts.sort((a, b) => a.price - b.price);
        state.isSorted = true;
      } else if (order === 'desc') {
        state.filteredProducts.sort((a, b) => b.price - a.price);
        state.isSorted = true;
      } else {
        state.filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        state.isSorted = false;
      }
    },
    resetSort(state) {
      // Restore the default sorting by rating.rate
      state.filteredProducts = [...state.products].sort((a, b) => b.rating.rate - a.rating.rate);
      state.isSorted = false;
    },
    resetState() {
      return initialState; // Reset state to its initial values
    },
  },
});

export const {
  setProducts,
  setPriceRangeFilter,
  resetPriceRangeFilter,
  sortProducts,
  resetSort,
  resetState
} = productsSlice.actions;

export default productsSlice.reducer;
