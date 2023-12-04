import {StateType} from '../index';
import {createSelector} from '@reduxjs/toolkit';

const state = ({auth}: StateType) => auth;

export const isLoadingSelector = createSelector(
  state,
  ({isLoading}) => isLoading,
);

export const accessTokenSelector = createSelector(
  state,
  ({authInfo}) => authInfo.access_token,
);

export const userIdSelector = createSelector(
  state,
  ({userInfo}) => userInfo.id,
);

export const userSelector = createSelector(state, ({userInfo}) => userInfo);
