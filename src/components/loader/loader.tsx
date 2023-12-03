import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.base} size="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
