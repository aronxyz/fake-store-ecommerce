import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => 
        query === 'shop all' 
          ? '/products' 
          : `/products/category/${query}`,
      keepUnusedDataFor: 5,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getBestSellers: builder.query({
      query: () => `/products?limit=8`,
    }),
    getProductsByQuery: builder.query({
      query: (query) => 
        query === 'shop-all' 
          ? '/products' 
          : `/products/category/${query}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductQuery,
  useGetBestSellersQuery
} = productsApiSlice;
