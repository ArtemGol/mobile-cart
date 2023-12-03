import React from 'react';
import {View, StyleSheet, Text, Platform, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/auth/authSelector';
import {CustomImage} from '../../components/customImage/customImage';
import {colors} from '../../../assets/colors/colors';
import {ProfileInfoItem} from '../../components/profileInfoItem/profileInfoItem';
import CustomButton from '../../components/customButton/customButton';
import {useAppDispatch} from '../../store';
import {authAction} from '../../store/auth/authSlice';
import {useTranslation} from 'react-i18next';
import {productsApi} from '../../api/productsApi';

const ProfileScreen = () => {
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageBlock}>
        <CustomImage src={user.avatar} uniqStyles={styles.image} />
        <View style={styles.editBlock}>
          <Text style={styles.editText}>{t('profileScreen.edit')}</Text>
        </View>
      </View>
      <View style={styles.infoBlocks}>
        <ProfileInfoItem
          title="name"
          description={user.name}
          uniqStyles={styles.uniqStyles}
        />
        <ProfileInfoItem
          title="mail"
          description={user.email}
          uniqStyles={styles.uniqStyles}
        />
        <ProfileInfoItem
          title="password"
          description={user.password}
          hideDesc
        />
      </View>
      <View style={styles.btnBlock}>
        <CustomButton
          label="profileScreen.logout"
          onPress={() => {
            dispatch(authAction.logout());
            dispatch(productsApi.util?.resetApiState());
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    minHeight: '100%',
  },
  imageBlock: {
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    height: 120,
    width: 120,
    marginBottom: 24,
  },
  image: {
    height: 120,
    width: 120,
  },
  editBlock: {
    position: 'absolute',
    bottom: 0,
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editText: {
    fontSize: 12,
    fontFamily: 'SF-Regular',
    textTransform: 'uppercase',
    color: colors.white,
  },
  infoBlocks: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  uniqStyles: {
    borderColor: colors.gray,
    borderBottomWidth: 0.5,
  },
  btnBlock: {
    width: '100%',
    marginTop: 24,
  },
});
