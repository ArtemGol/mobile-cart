import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

interface IProps {
  title: string;
  description: string;
  uniqStyles?: Record<string, string | number>;
  hideDesc?: boolean;
}

export const ProfileInfoItem = ({
  title,
  description,
  uniqStyles,
  hideDesc,
}: IProps) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.getParent()?.navigate('Modal', {title, description});
        navigation.getParent()?.setOptions({title});
      }}
      activeOpacity={0.5}
      style={[styles.container, uniqStyles]}>
      <Text style={styles.title}>
        {t(`profileScreen.userDataTitles.${title}`)}
      </Text>
      {!hideDesc ? <Text style={styles.description}>{description}</Text> : null}
      <View style={styles.arrowBlock}>
        <Icon name="chevron-right" color={colors.gray} size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 60,
    position: 'relative',
  },
  title: {
    fontFamily: 'SF-Regular',
    fontSize: 17,
    color: colors.black,
  },
  description: {
    fontFamily: 'SF-Regular',
    fontSize: 15,
    color: colors.gray,
  },
  arrowBlock: {
    position: 'absolute',
    right: 8,
  },
});
