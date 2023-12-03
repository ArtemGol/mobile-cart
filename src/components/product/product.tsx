import React from 'react';
import {CustomImage} from '../customImage/customImage';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {IProduct} from '../../api/dto/IProduct';
import {useDispatch} from 'react-redux';
import {cartAction} from '../../store/cart/cartSlice';
import {useTranslation} from 'react-i18next';
import {dayJSGlobalFunk} from '../../../assets/constants/dayJSGlobalFunk';

interface IProps {
  item: IProduct;
}

export const Product = ({item}: IProps) => {
  const {i18n} = useTranslation();
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
        uniqStyles={{width: 100, height: 100}}
      />
      <View style={styles.productData}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.productDate} numberOfLines={1}>
          {dayJSGlobalFunk(item.creationAt, i18n.language).format(
            'DD MMMM, YY',
          )}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 166,
    marginBottom: 16,
    padding: 24,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
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
    marginLeft: 32,
  },
  productTitle: {
    fontSize: 18,
    fontFamily: 'SF-Medium',
    color: colors.black,
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: 'SF-Regular',
    marginBottom: 6,
  },
  productDate: {
    fontSize: 10,
    color: colors.gray,
    fontFamily: 'SF-Regular',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 14,
    color: colors.black,
    fontFamily: 'SF-Regular',
  },
});
