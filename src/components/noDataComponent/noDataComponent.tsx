import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {useTranslation} from 'react-i18next';

interface IProps {
  pathToText: string;
}

export const NoDataComponent = ({pathToText}: IProps) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t(pathToText)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.gray,
    fontFamily: 'SF-Regular',
  },
});
