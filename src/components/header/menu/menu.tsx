import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../../assets/colors/colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const Menu = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      activeOpacity={0.7}>
      <Icon name="menu" color={colors.black} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
