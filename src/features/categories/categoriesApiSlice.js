import { apiSlice } from "../../app/api/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/products/categories',
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery
} = categoriesApiSlice;
