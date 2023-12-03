import React from 'react';
import {CustomImage} from '../customImage/customImage';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {useDispatch} from 'react-redux';
import {cartAction} from '../../store/cart/cartSlice';
import type {ICartProduct} from '../../../assets/common/interfaces/ICart';

interface IProps {
  item: ICartProduct;
}

export const CartProduct = ({item}: IProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartAction.addProduct(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(cartAction.removeProduct(item.id));
  };

  return (
    <View style={styles.container}>
      <CustomImage src={item.images[0]} uniqStyles={styles.img} />
      <View style={styles.productData}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <View style={styles.countBlock}>
        <TouchableOpacity
          onPress={handleRemoveFromCart}
          activeOpacity={0.7}
          style={styles.countItem}>
          <Text style={styles.countText}>-</Text>
        </TouchableOpacity>
        <View style={styles.countItem}>
          <Text style={styles.countText}>{item.count}</Text>
        </View>
        <TouchableOpacity
          onPress={handleAddToCart}
          activeOpacity={0.7}
          style={styles.countItem}>
          <Text style={styles.countText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 114,
    marginBottom: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  productData: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 100,
    marginHorizontal: 16,
  },
  productTitle: {
    fontFamily: 'SF-Medium',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8,
  },
  productPrice: {
    fontFamily: 'SF-Regular',
    fontSize: 12,
    color: colors.gray,
  },
  countBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countItem: {
    width: 31,
    height: 31,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    marginRight: 4,
  },
  countText: {
    fontFamily: 'SF-Regular',
    color: colors.blue,
  },
  img: {
    width: 50,
    height: 50,
  },
});
