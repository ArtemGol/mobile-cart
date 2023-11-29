import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {productsApi} from '../api';
import {cartReducer} from './cart/cartSlice';

const reducer = combineReducers({
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type StateType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
