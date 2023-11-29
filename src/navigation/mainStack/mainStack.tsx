import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopScreen from '../../screens/shopScreen/shopScreen';
import ProfileScreen from '../../screens/profileScreen/profileScreen';
import CartScreen from '../../screens/cartScreen/cartScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../assets/colors/colors';
import {useSelector} from 'react-redux';
import {productsSelector} from '../../store/cart/cartSelector';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  const products = useSelector(productsSelector);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
      }}>
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Best Shop',
          tabBarLabel: 'Shop',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Account',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: `Total: $${products.reduce(
            (el, acc) => acc.price + el,
            0,
          )}`,
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
          tabBarBadge: products.reduce((el, acc) => acc.count + el, 0),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
