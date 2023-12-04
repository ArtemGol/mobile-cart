import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerStack from './drawerStack/drawerStack';
import {useAppDispatch} from '../store';
import {getToken} from '../../assets/constants/tokensFunks';
import {authAction} from '../store/auth/authSlice';
import {authApi} from '../api/authApi';
import {useSelector} from 'react-redux';
import {isInitializeSelector} from '../store/auth/authSelector';
import {LoaderScreen} from '../components/loader/loaderScreen';

const Navigation = () => {
  const loading = useSelector(isInitializeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getToken()
      .then(res => {
        if (res) {
          dispatch(authAction.setToken(res));
        }
      })
      .finally(() => {
        dispatch(authApi.endpoints?.getUser.initiate());
        dispatch(authAction.setInitialize(false));
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default Navigation;
