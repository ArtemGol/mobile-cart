import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/loginScreen/loginScreen';
import {Menu} from '../../components/header/menu/menu';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName={t('loginScreen.button')}
      screenOptions={() => ({
        headerTitleStyle: {
          fontFamily: 'SF-Medium',
        },
        headerTitleAlign: 'center',
        headerLeft: () => <Menu />,
        headerLeftContainerStyle: {
          marginLeft: 16,
          marginRight: -16,
        },
        headerTitle: t('loginScreen.button'),
      })}>
      <Stack.Screen
        name="Login"
        options={{animation: 'slide_from_left'}}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
