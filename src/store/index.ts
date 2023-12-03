import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {productsApi} from '../api/productsApi';
import {cartReducer} from './cart/cartSlice';
import {authReducer} from './auth/authSlice';
import {authApi} from '../api/authApi';

const reducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(productsApi.middleware)
      .concat(authApi.middleware),
});

export type StateType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
