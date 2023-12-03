import React, {FC} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {colors} from '../../../assets/colors/colors';
import {RootStackParamList} from '../../../assets/common/interfaces/rootBottomTabsTypes';
import {useSelector} from 'react-redux';
import {productsSelector} from '../../store/cart/cartSelector';
import {CartProduct} from '../../components/product/cartProduct';
import {NoDataComponent} from '../../components/noDataComponent/noDataComponent';
import {useTranslation} from 'react-i18next';

interface IProps {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Cart'>;
}

const CartScreen: FC<IProps> = ({navigation}) => {
  const {t} = useTranslation();
  const products = useSelector(productsSelector);

  const handleNavigation = () => {
    navigation.navigate('Shop');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        contentContainerStyle={styles.contentListBlock}
        style={styles.contentInsideListBlock}
        renderItem={({item}) => <CartProduct key={item.id} item={item} />}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={() => (
          <NoDataComponent pathToText="cartScreen.noData" />
        )}
        onEndReachedThreshold={0.7}
        removeClippedSubviews
      />
      <TouchableOpacity
        onPress={handleNavigation}
        activeOpacity={0.7}
        style={styles.bottomBtnBlock}>
        <Text style={styles.btnText}>{t('cartScreen.button')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  contentListBlock: {
    paddingTop: 10,
    paddingBottom: 70,
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
  },
  contentInsideListBlock: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomBtnBlock: {
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 16,
    width: '88%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  btnText: {
    color: colors.white,
  },
});
