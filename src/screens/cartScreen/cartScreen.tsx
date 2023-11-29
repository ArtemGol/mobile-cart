import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {colors} from '../../../assets/colors/colors';
import {RootStackParamList} from '../../../assets/common/interfaces/rootBottomTabsTypes';
import {useSelector} from 'react-redux';
import {productsSelector} from '../../store/cart/cartSelector';
import {CartProduct} from '../../components/product/cartProduct';

interface IProps {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Cart'>;
}

const CartScreen: FC<IProps> = ({navigation}) => {
  const products = useSelector(productsSelector);

  const handleNavigation = () => {
    navigation.navigate('Shop');
  };

  return (
    <View style={styles.main}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        {!products.length ? (
          <View style={styles.empty}>
            <Text>cart is empty</Text>
          </View>
        ) : (
          products.map(el => <CartProduct key={el.id} item={el} />)
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={handleNavigation}
        activeOpacity={0.7}
        style={styles.bottomBtnBlock}>
        <Text style={styles.btnText}>Go to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 80,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
    width: '100%',
    height: '100%',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  bottomBtnBlock: {
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  btnText: {
    color: colors.white,
  },
});
