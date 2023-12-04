import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../../assets/common/interfaces/rootBottomTabsTypes';
import {productsApi, useGetAllProductsQuery} from '../../api/productsApi';
import {Loader} from '../../components/loader/loader';
import {Product} from '../../components/product/product';
import {NoDataComponent} from '../../components/noDataComponent/noDataComponent';
import {colors} from '../../../assets/colors/colors';
import {useAppDispatch} from '../../store';

interface IProps {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Shop'>;
}

const ShopScreen: FC<IProps> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState<number>(0);
  const {data, isLoading} = useGetAllProductsQuery(page);
  const dispatch = useAppDispatch();

  const loadMoreItems = () => {
    //Обновление страницы нужно останавливать, когда пагинация закончилась
    !isLoading && setPage(prevState => prevState + 1);
  };

  const emptyComponent = () =>
    isLoading ? <Loader /> : <NoDataComponent pathToText="shopScreen.noData" />;

  //Лоудер нужно убирать, когда пагинация закончилась
  const footerComponent = data?.length ? () => <Loader /> : undefined;

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(productsApi.util?.resetApiState());
    setPage(0);
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      refreshControl={
        <RefreshControl
          colors={[colors.blue]}
          progressBackgroundColor={colors.white}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      }
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
