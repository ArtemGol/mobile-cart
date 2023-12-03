import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackModalTypes} from '../../../assets/common/interfaces/RootStackModalTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getFromNavigationFunk} from '../../../assets/constants/getFromNavigationFunk';
import InputField from '../../components/inputField/inputField';
import CustomButton from '../../components/customButton/customButton';
import {profileDataTypesObj} from '../../../assets/constants/profileDataTypesObj';
import {useDispatch} from 'react-redux';
import {authAction} from '../../store/auth/authSlice';
import {useTranslation} from 'react-i18next';

type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackModalTypes,
  'Modal'
>;

interface IProps {
  navigation: RootStackNavigationProp;
}

const ModalScreen: FC<IProps> = ({navigation}) => {
  const {t} = useTranslation();
  const navigationProps = getFromNavigationFunk(navigation);
  const [value, setValue] = useState(navigationProps?.description);
  const currentItem = profileDataTypesObj?.[navigationProps?.title];
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(authAction.changeMainData({key: currentItem.key, value}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <InputField
        iconName={currentItem.icon}
        onChangeText={text => setValue(text)}
        value={value}
      />
      <CustomButton
        label={`Change ${t(
          `profileScreen.userDataTitles.${
            getFromNavigationFunk(navigation)?.title
          }`,
        )}`}
        onPress={handleChange}
      />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
  },
});
