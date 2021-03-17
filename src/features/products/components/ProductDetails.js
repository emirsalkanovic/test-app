import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../cart/actions/cart-actions';
import { View, Text, SafeAreaView, Image } from 'react-native';

import styles from '../styles/order-styles';
import TransparentHeader from '../../../components/TransparentHeader';
import TextButton from '../../../components/TextButton';

const ProductDetails = (props) => {
  const detailsData = props.route.params.product

  const onAddtoCartPress = () => {
    if (props.cartProducts.includes(detailsData)) {
      return;
    }
    detailsData.quantity = 1;
    props.addProductToCart(detailsData)
    props.navigation.navigate('Cart')
  }

  const images = {
    pancake: require('../../../assets/img/products/pancake.jpeg'),
    coffee: require('../../../assets/img/products/coffee.jpeg'),
    chocolate: require('../../../assets/img/products/chocolate.jpeg'),
    beer: require('../../../assets/img/products/beer.jpeg'),
    bread: require('../../../assets/img/products/bread.jpeg'),
    meat: require('../../../assets/img/products/meat.jpeg'),
    egg: require('../../../assets/img/products/egg.jpeg'),
    milk: require('../../../assets/img/products/milk.jpeg'),
  };

  const checkImagesSource = () => {
    if (detailsData.image === 'pancake') {
      return images.pancake;
    }
    if (detailsData.image === 'coffee') {
      return images.coffee;
    }
    if (detailsData.image === 'chocolate') {
      return images.chocolate;
    }
    if (detailsData.image === 'beer') {
      return images.beer;
    }
    if (detailsData.image === 'bread') {
      return images.bread;
    }
    if (detailsData.image === 'meat') {
      return images.meat;
    }
    if (detailsData.image === 'egg') {
      return images.egg;
    }
    if (detailsData.image === 'milk') {
      return images.milk;
    }
  }

  return (
    <SafeAreaView style={styles.productDetailsContainer}>
      <View style={styles.productDetailsContentHolder}>
        <TransparentHeader navigation={props.navigation} title='Product Details' />
        <View style={styles.productDetailsBox}>
          <View style={styles.producDetailsDescriptionHolder}>
            <View style={styles.singleTextHolder}>
              <Text style={styles.productDetailsLabel}>Name of the product:</Text>
              <Text style={styles.productDetailsText}>{detailsData.name}</Text>
            </View>
            <View style={styles.singleTextHolder}>
              <Text style={styles.productDetailsLabel}>Description:</Text>
              <Text style={styles.productDetailsText}>{detailsData.description}</Text>
            </View>
            <View style={styles.singleTextHolder}>
              <Text style={styles.productDetailsLabel}>Price:</Text>
              <Text style={styles.productDetailsText}>${detailsData.price.toFixed(2)}</Text>
            </View>
            <View style={styles.detailsImageHolder}>
              <Image
                style={styles.detailsImage}
                source={checkImagesSource()}
              />
            </View>
          </View>
          <View style={styles.productDetailsButtonHolder} >
            {props.cartProducts.includes(detailsData) ?
              <View style={styles.errorMessageHolder}>
                <Text style={styles.errorMessage}>You can not add this product,</Text>
                <Text style={styles.errorMessage}>Product is already in the cart.</Text>
              </View>
              : null
            }
            <TextButton
              onPress={onAddtoCartPress}
              title="Add to Cart"
              buttonStyle={styles.productDetailsButton}
              titleStyle={styles.productDetailsButtonTitle}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    cartProducts: state.cart.products
  }
}

export default connect(mapStateToProps, { addProductToCart })(ProductDetails);