import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IProduct} from './dto/IProduct';

export const productsApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/'}),
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], string>({
      query: () => 'products',
    }),
  }),
});
export const {useGetAllProductsQuery} = productsApi;
