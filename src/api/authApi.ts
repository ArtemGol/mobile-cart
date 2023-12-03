import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './index';
import type {IAuthInfo, IAuthorization, IUserInfo} from './dto/IAuth';

export const authApi = createApi({
  reducerPath: 'authRequests',
  baseQuery,
  endpoints: builder => ({
    login: builder.mutation<IAuthInfo, IAuthorization>({
      query: body => {
        return {
          url: 'auth/login',
          method: 'post',
          body,
        };
      },
    }),
    getUser: builder.mutation<IUserInfo, void>({
      query: () => 'auth/profile',
    }),
  }),
});

export const {useLoginMutation, useGetUserMutation} = authApi;
