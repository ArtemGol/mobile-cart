import React from 'react';
import {colors} from '../../../assets/colors/colors';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.black} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
