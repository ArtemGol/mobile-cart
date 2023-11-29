import React from 'react';
import {CustomImage} from '../customImage/customImage';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {IProduct} from '../../api/dto/IProduct';
import {useDispatch} from 'react-redux';
import {cartAction} from '../../store/cart/cartSlice';

interface IProps {
  item: IProduct;
}

export const Product = ({item}: IProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartAction.addProduct(item));
  };

  return (
    <TouchableOpacity
      onPress={handleAddToCart}
      activeOpacity={0.7}
      style={styles.container}
      key={item.id}>
      <CustomImage
        src={item.images[0]}
        sizesStyles={{width: 100, height: 100}}
      />
      <View style={styles.productData}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 32,
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
  },
  productImage: {
    marginRight: 32,
    width: 100,
    height: 100,
  },
  productData: {
    flexDirection: 'column',
    width: 150,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  productDescription: {
    fontSize: 12,
    color: colors.black,
  },
  productPrice: {
    fontSize: 14,
    color: colors.black,
  },
});
