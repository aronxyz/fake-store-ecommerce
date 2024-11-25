import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetAllProductsQuery
} = productsApiSlice;
