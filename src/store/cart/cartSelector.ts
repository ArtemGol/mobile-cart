import {StateType} from '../index';
import {createSelector} from '@reduxjs/toolkit';

const state = ({cart}: StateType) => cart;

export const productsSelector = createSelector(state, ({products}) => products);
