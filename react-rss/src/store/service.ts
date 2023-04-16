import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../types/types';

interface IResponseApi {
  products?: IProduct[] | null;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], string>({
      query: (search) => ({ url: `products/search?q=${search}` }),
      transformResponse: (response: IResponseApi) => response.products ?? [],
    }),
    getProductDescription: builder.query<IProduct, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductDescriptionQuery } = productApi;
