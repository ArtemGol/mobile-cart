import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/profileScreen/profileScreen';
import ModalScreen from '../../screens/modalScreen/modalScreen';
import {Menu} from '../../components/header/menu/menu';
import {useTranslation} from 'react-i18next';
import {getFromNavigationFunk} from '../../../assets/constants/getFromNavigationFunk';

const RootStack = createNativeStackNavigator();

const ModalStack = () => {
  const {t} = useTranslation();
  return (
    <RootStack.Navigator
      screenOptions={() => ({
        headerTitleStyle: {
          fontFamily: 'SF-Medium',
        },
        headerTitleAlign: 'center',
        headerLeft: () => <Menu />,
      })}
      initialRouteName="MainHome">
      <RootStack.Group>
        <RootStack.Screen
          name="MainHome"
          component={ProfileScreen}
          options={{
            headerTitle: t('mainStack.profile.header'),
            headerTitleStyle: {
              fontFamily: 'SF-Medium',
            },
          }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
          animation: 'fade_from_bottom',
        }}>
        <RootStack.Screen
          name="Modal"
          component={ModalScreen}
          options={({navigation}) => ({
            title: t(
              `profileScreen.userDataTitles.${
                getFromNavigationFunk(navigation)?.title
              }`,
            ),
          })}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default ModalStack;
