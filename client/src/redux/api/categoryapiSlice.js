import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../contants";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (newcategory) => ({
                url: `${CATEGORY_URL}`,
                method: 'POST',
                body: newcategory
            })
        }),
        updateCategory: builder.mutation({
            query: ({ categoryId, updateCategory}) => ({
                url: `${CATEGORY_URL}/${categoryId}`,
                method: 'PUT',
                body: updateCategory
            })
        }),
        deleteCategory: builder.mutation({
            query: (categoryId) => ({
                url: `${CATEGORY_URL}/${categoryId}`,
                method: 'DELETE',
            })
        }),
        fetchCategories: builder.query({
            query: () => ({
                url: `${CATEGORY_URL}`,
                method: 'GET',
            })
        })
    })
})

export const { useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, useFetchCategoriesQuery } = categoryApiSlice

