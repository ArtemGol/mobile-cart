import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {colors} from '../../../assets/colors/colors';
import {RootStackParamList} from '../../../assets/common/interfaces/rootBottomTabsTypes';

interface IProps {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Profile'>;
}

const ProfileScreen: FC<IProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>profile screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});
