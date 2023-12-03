import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from '../mainStack/mainStack';
import DrawerMenu from '../../components/drawerMenu/drawerMenu';
import {useSelector} from 'react-redux';
import {userIdSelector} from '../../store/auth/authSelector';
import AuthStack from '../authStack/authStack';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  const userId = useSelector(userIdSelector);
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      {userId ? (
        <Drawer.Screen name="HomeScreen" component={MainStack} />
      ) : (
        <Drawer.Screen name="Auth" component={AuthStack} />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
