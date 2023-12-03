import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {BASEURL} from '../../assets/constants/apiConstants';
import {StateType} from '../store';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as StateType).auth.authInfo.access_token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
