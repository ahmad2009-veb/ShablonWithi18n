import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getUsers = createApi({
    reducerPath: 'getUsers',
    tagTypes:["Todo"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://to-dos-api.softclub.tj' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
        query: () => `/api/to-dos`,
        providesTags:["Todo"]
    }),
  }),
})

export const { useGetUsersQuery } = getUsers