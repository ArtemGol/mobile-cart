import {NavigationProp} from '@react-navigation/native';

export const getFromNavigationFunk = (navigation: NavigationProp<any>) => {
  return navigation
    ?.getState()
    ?.routes.find((el: {name: string}) => el.name === 'Modal')?.params;
};
