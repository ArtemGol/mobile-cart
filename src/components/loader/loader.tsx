import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#FFF" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.base,
  },
});
