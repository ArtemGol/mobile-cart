import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IProduct} from './dto/IProduct';
import {LIMIT} from '../../assets/constants/shopConstants';
import {BASEURL} from '../../assets/constants/apiConstants';

export const productsApi = createApi({
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({baseUrl: BASEURL}),
  endpoints: builder => ({
    getAllProducts: builder.query<IProduct[], number>({
      query: (page = 1) => `products?limit=${LIMIT}&offset=${page * LIMIT}`,
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
  }),
});
export const {useGetAllProductsQuery} = productsApi;
