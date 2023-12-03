import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopScreen from '../../screens/shopScreen/shopScreen';
import CartScreen from '../../screens/cartScreen/cartScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../assets/colors/colors';
import {useSelector} from 'react-redux';
import {productsSelector} from '../../store/cart/cartSelector';
import {Menu} from '../../components/header/menu/menu';
import {useTranslation} from 'react-i18next';
import ModalStack from '../modalStack/modalStack';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  const {t} = useTranslation();
  const products = useSelector(productsSelector);
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: colors.blue,
        headerTitleStyle: {
          fontFamily: 'SF-Medium',
        },
        headerStyle: {
          borderBottomWidth: 0.5,
          borderBottomColor: colors.blackOpacity,
        },
        headerTitleAlign: 'center',
        headerLeft: () => <Menu />,
        headerLeftContainerStyle: {
          marginLeft: 24,
          marginRight: -24,
        },
      })}>
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerTitle: t('mainStack.shop.header'),
          tabBarLabel: t('mainStack.shop.tapBar'),
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ModalStack}
        options={{
          headerShown: false,
          tabBarLabel: t('mainStack.profile.tapBar'),
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: `${t('mainStack.total.header')}: $${products.reduce(
            (el, acc) => acc.price * acc.count + el,
            0,
          )}`,
          tabBarLabel: t('mainStack.total.tapBar'),
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
