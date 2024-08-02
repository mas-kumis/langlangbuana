import { apiSlice } from "../api/apiSlice"
import { USERS_URL } from "../contants"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',

            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: data
            })
         }),
         profile: builder.mutation({
            query : (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
         }),
         getAllUsers : builder.query({
            query: () => ({
                url: `${USERS_URL}`,
            }), 
            providesTags : ["User"],
            keepUnusedDataFor : 5,
         }),
         deleteUser : builder.mutation({
            query: (id) => ({
                url: `${USERS_URL}/${id}`,
                method: 'DELETE',
            }),
         }),
         getUsersDetail : builder.query({
            query: (id) => ({
                url: `${USERS_URL}/${id}`,
            }),
            providesTags : ["User"],
            keepUnusedDataFor : 5,
         }),
         updateUser : builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data.userId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags : ["User"],
         }),
 })
})

 

 export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useProfileMutation, useGetAllUsersQuery, useGetUsersDetailQuery, useDeleteUserMutation, useUpdateUserMutation} = usersApiSlice