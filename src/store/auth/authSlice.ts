import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {IAuthState} from '../../api/dto/IAuth';
import {authApi} from '../../api/authApi';
import {IAuthInfo} from '../../api/dto/IAuth';
import {Alert} from 'react-native';

const initialUserInfo = {
  id: 0,
  email: '',
  password: '',
  name: '',
  role: '',
  avatar: '',
};

const initialAuthInfo = {
  access_token: '',
  refresh_token: '',
};

const authInitialState: IAuthState = {
  userInfo: initialUserInfo,
  authInfo: initialAuthInfo,
  isLoading: true,
  value: 0,
};

export const {actions: authAction, reducer: authReducer} = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logout: state => {
      state.userInfo = initialUserInfo;
      state.authInfo = initialAuthInfo;
      AsyncStorage.removeItem('tokens');
    },
    setToken: (state, {payload}: PayloadAction<IAuthInfo>) => {
      state.authInfo = payload;
    },
    changeMainData: (
      state,
      {
        payload,
      }: PayloadAction<{key: 'email' | 'password' | 'name'; value: string}>,
    ) => {
      state.userInfo[payload.key] = payload.value;
    },
  },
  extraReducers: builder =>
    builder
      .addMatcher(
        authApi.endpoints?.login.matchFulfilled,
        (state, {payload}) => {
          state.authInfo.access_token = payload.access_token;
          state.authInfo.refresh_token = payload.refresh_token;
          AsyncStorage.setItem('tokens', JSON.stringify(payload));
        },
      )
      .addMatcher(authApi.endpoints?.login.matchRejected, () => {
        Alert.alert('Password or email are incorrect');
      })
      .addMatcher(authApi.endpoints?.getUser.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(
        authApi.endpoints?.getUser.matchFulfilled,
        (state, {payload}) => {
          state.isLoading = false;
          state.userInfo = payload;
        },
      )
      .addMatcher(authApi.endpoints?.getUser.matchRejected, state => {
        state.isLoading = false;
      }),
});
