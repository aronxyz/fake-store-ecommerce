import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
      keepUnusedDataFor: 5,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getBestSellers: builder.query({
      query: () => `/products?limit=5`,
    })
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetBestSellersQuery
} = productsApiSlice;
