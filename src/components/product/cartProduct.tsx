import React from 'react';
import {CustomImage} from '../customImage/customImage';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
      <View style={styles.imgTextBlock}>
        <CustomImage
          src={item.images[0]}
          sizesStyles={{width: 50, height: 50}}
        />
        <View style={styles.productData}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
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
    marginBottom: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    width: '98%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    marginRight: 32,
    width: 100,
    height: 100,
  },
  productData: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imgTextBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8,
    maxWidth: 130,
  },
  productPrice: {
    fontSize: 12,
    color: colors.black,
  },
  countBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countItem: {
    width: 31,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    marginRight: 4,
  },
  countText: {
    color: colors.blue,
  },
});
