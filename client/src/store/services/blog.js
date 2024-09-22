import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const blogSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/blogs" }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    fetchBlog: builder.query({
      query: () => `/`,
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: "/post",
        method: "POST",
        body: blog,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const { useFetchBlogQuery, useCreateBlogMutation } = blogSlice;
