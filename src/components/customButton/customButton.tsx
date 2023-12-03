import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/colors/colors';
import {useTranslation} from 'react-i18next';

interface IProps {
  label: string;
  onPress: () => void;
}

const CustomButton = ({label, onPress}: IProps) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{t(label)}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.blue,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'SF-Regular',
    textAlign: 'center',
    fontSize: 16,
    color: colors.white,
  },
});
