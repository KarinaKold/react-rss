import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../types/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], string>({
      query: (search) => `products/${search}`,
    }),
    getProductDescription: builder.query<IProduct, number>({
      query: (ID) => `products/${ID}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductDescriptionQuery } = productApi;
