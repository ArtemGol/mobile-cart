import React, {FC} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {colors} from '../../../assets/colors/colors';
import {RootStackParamList} from '../../../assets/common/interfaces/rootBottomTabsTypes';
import {useGetAllProductsQuery} from '../../api';
import {Loader} from '../../components/loader/loader';
import {Product} from '../../components/product/product';

interface IProps {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Shop'>;
}

const ShopScreen: FC<IProps> = () => {
  const {data, isLoading} = useGetAllProductsQuery('');

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.map(product => <Product key={product.id} item={product} />)
      )}
    </ScrollView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  container: {
    padding: 24,
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
});
