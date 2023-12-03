import AsyncStorage from '@react-native-async-storage/async-storage';
import type {IAuthResponse} from '../../src/api/dto/IAuth';

export const getToken = async () => {
  const data = await AsyncStorage.getItem('tokens');
  if (data !== null) {
    const value: IAuthResponse = JSON.parse(data);
    return value;
  }
  return;
};
