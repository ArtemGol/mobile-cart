import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {LocationsDropdown} from '../locationsDropDown/locationsDropdown';

const DrawerMenu = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <LocationsDropdown />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});
