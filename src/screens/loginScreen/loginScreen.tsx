import React, {FC, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import InputField from '../../components/inputField/inputField';
import {validationFunk} from '../../../assets/constants/validationFunk';
import CustomButton from '../../components/customButton/customButton';
import {RootStackAuthTypes} from '../../../assets/common/interfaces/rootStackAuthTypes';
import {useGetUserMutation, useLoginMutation} from '../../api/authApi';
import {useTranslation} from 'react-i18next';

interface IProps {
  navigation: NativeStackNavigationProp<RootStackAuthTypes, 'Login'>;
}

const LoginScreen: FC<IProps> = () => {
  const {t} = useTranslation();
  const [login] = useLoginMutation();
  const [getUser] = useGetUserMutation();
  const [email, setEmail] = useState('john@mail.com');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('changeme');
  const [pasError, setPasError] = useState('');

  const onHandleLogin = () => {
    const emailVal = validationFunk({
      fieldName: 'Email',
      value: email,
      errors: ['required', 'email'],
    });

    const pasVal = validationFunk({
      fieldName: 'Password',
      value: password,
      min: 6,
      errors: ['required', 'minLength'],
    });

    if (emailVal || pasVal) {
      setEmailError(emailVal);
      setPasError(pasVal);
    } else {
      login({email, password}).then(() => getUser());
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputField
        iconName="person"
        fieldError={emailError}
        label={'loginScreen.email'}
        keyboardType="email-address"
        onChangeText={text => {
          setEmail(text);
          setEmailError('');
        }}
        value={email}
      />

      <InputField
        iconName="lock"
        fieldError={pasError}
        label={'loginScreen.password'}
        inputType="password"
        fieldButtonLabel={t('loginScreen.forgot')}
        value={password}
        onChangeText={text => {
          setPassword(text);
          setPasError('');
        }}
        fieldButtonFunction={() => {}}
      />
      <CustomButton label={t('loginScreen.button')} onPress={onHandleLogin} />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    minHeight: '100%',
    justifyContent: 'center',
  },
});
