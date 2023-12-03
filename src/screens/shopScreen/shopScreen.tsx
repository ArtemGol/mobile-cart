import React, {FC, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../../assets/common/interfaces/rootBottomTabsTypes';
import {useGetAllProductsQuery} from '../../api/productsApi';
import {Loader} from '../../components/loader/loader';
import {Product} from '../../components/product/product';
import {NoDataComponent} from '../../components/noDataComponent/noDataComponent';

interface IProps {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Shop'>;
}

const ShopScreen: FC<IProps> = () => {
  const [page, setPage] = useState<number>(1);
  const {data, isLoading} = useGetAllProductsQuery(page);

  const loadMoreItems = () => {
    //Обновление страницы нужно останавливать, когда пагинация закончилась
    setPage(prevState => prevState + 1);
  };

  const emptyComponent = () =>
    isLoading ? <Loader /> : <NoDataComponent pathToText="shopScreen.noData" />;

  //Лоудер нужно убирать, когда пагинация закончилась
  const footerComponent = data?.length ? () => <Loader /> : undefined;

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      renderItem={({item}) => <Product key={item.id} item={item} />}
      keyExtractor={item => `${item.id}`}
      ListEmptyComponent={emptyComponent}
      ListFooterComponent={footerComponent}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.7}
      removeClippedSubviews
    />
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
});
