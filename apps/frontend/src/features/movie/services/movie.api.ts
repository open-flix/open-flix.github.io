import { MovieResponse } from '@open-flix/shared';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/movie' }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.query<
      MovieResponse,
      { title: string; page: string }
    >({
      query: ({ title, page = 1 }) => ({
        url: '',
        params: { query: title, page },
      }),
      keepUnusedDataFor: 0,
      providesTags: [],
    }),
  }),
});
export const { useGetMoviesByTitleQuery } = movieApi;
