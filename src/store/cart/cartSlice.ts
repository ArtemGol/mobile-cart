import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {ICart} from '../../../assets/common/interfaces/ICart';
import {IProduct} from '../../api/dto/IProduct';

const initialCartState: ICart = {
  products: [],
};

export const {actions: cartAction, reducer: cartReducer} = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProduct: (state, {payload}: PayloadAction<IProduct>) => {
      if (state.products.some(el => el.id === payload.id)) {
        state.products = state.products.map(el =>
          el.id === payload.id ? {...el, count: el.count + 1} : el,
        );
      } else {
        state.products.push({...payload, count: 1});
      }
    },
    removeProduct: (state, {payload}: PayloadAction<number>) => {
      if (state.products.some(el => el.id === payload && el.count > 1)) {
        state.products = state.products.map(el =>
          el.id === payload ? {...el, count: el.count - 1} : el,
        );
      } else {
        state.products = state.products.filter(el => el.id !== payload);
      }
    },
  },
});
