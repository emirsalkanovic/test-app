import React from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import styles from '../style/cart-style';
import Header from '../../../components/Header';
import { fetchCartProducts, removeCartProduct, checkoutProduct } from '../actions/cart-actions';
import Loader from '../../../components/Loader';
import TextButton from '../../../components/TextButton';
import ModalComponent from '../../../components/ModalComponent';

class CartScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      isLoading: true,
      showModal: false
    }
  }

  componentDidMount() {
    const response = async () => {
      await this.props.fetchCartProducts();
    }
    this.setState({
      productList: this.props.cartProducts
    })
    this.setState({
      isLoading: false
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartProducts !== prevProps.cartProducts) {
      this.setState({
        productList: this.props.cartProducts
      })
    }
  }

  onQuantityUp = (item) => {
    let newList = this.state.productList;
    for (let i = 0; i < newList.length; i++) {
      if (item.id === newList[i].id) {
        newList[i].quantity++;
      }
    }
    this.setState({
      productList: newList
    });
  }

  onQuantityDown = (item) => {
    if (item.quantity === 1) {
      return;
    };
    let newList = this.state.productList;
    for (let i = 0; i < newList.length; i++) {
      if (item.id === newList[i].id) {
        newList[i].quantity--;
      }
    };
    this.setState({
      productList: newList
    });
  }

  calulateTotalPrice = (item) => {
    return (item.quantity * item.price).toFixed(2);
  }

  onRemoveItem = (item) => {
    let newList = this.state.productList.filter(product => product.id !== item.id);
    this.setState({
      productList: newList
    })
    this.props.removeCartProduct(newList)
  }

  calucateTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < this.state.productList.length; i++) {
      let sum = 0
      sum = this.state.productList[i].quantity * this.state.productList[i].price;
      totalAmount = totalAmount + sum
    }
    return totalAmount.toFixed(2);
  }

  onCheckoutPress = () => {
    this.setState({
      showModal: true
    })
  }

  onCloseModal = () => {
    this.props.checkoutProduct();
    this.setState({
      showModal: false
    });
  }

  renderSingleProduct = ({ item }) => {
    return (
      <View
        style={styles.singleProductContainer}
      >
        <Text style={styles.singleProductText}>{item.name}</Text>
        <View style={styles.singleProductItem}>
          <Text>$ {item.price}</Text>
        </View>
        <View style={styles.singleProductItem}>
          <TouchableOpacity
            onPress={() => this.onQuantityUp(item)}
            style={styles.cartListQuantityButtonHolder}
          >
            <Text style={styles.cartListQuantityButton}>+</Text>
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => this.onQuantityDown(item)}
            style={styles.cartListQuantityButtonHolder}
          >
            <Text style={styles.cartListQuantityButton}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleProductItem}>
          <Text>${this.calulateTotalPrice(item)}</Text>
        </View>
        <TouchableOpacity
          style={styles.singleProductItem}
          onPress={() => this.onRemoveItem(item)}
        >
          <View style={styles.singleProductItemRemoveButton}>
            <Text style={styles.removeButton}>X</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderCardScreen() {
    const { productList } = this.state;
    if (productList.length > 0) {
      return (
        <View style={styles.cartListContainer}>
          <View style={styles.cartListHolder}>
            <View style={styles.cartHeaderList}>
              <Text style={styles.primaryCartListItem}>Name</Text>
              <Text style={styles.cartListItem}>Price</Text>
              <Text style={styles.cartListItem}>Quantity</Text>
              <Text style={styles.cartListItem}>Total Price</Text>
              <Text style={styles.cartListItem}>Remove</Text>
            </View>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              disableVirtualization={false}
              style={styles.readyOrderList}
              data={productList}
              renderItem={(item) => this.renderSingleProduct(item)}
              keyExtractor={(itemdata, index) => index.toString()}
              refreshing={false}
            />
          </View>
          <View style={styles.cartListButtonHolder}>
            <Text style={styles.totalAmountText}>Total Amount: $ {this.calucateTotalAmount()}</Text>
            <TextButton
              onPress={this.onCheckoutPress}
              title="Checkout"
              buttonStyle={styles.cartButton}
              titleStyle={styles.cartButtontText}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyContetnContainer}>
          <Text style={styles.emptyContentText}>
            No Products in Cart
          </Text>
        </View>
      );
    }
  }

  render() {
    const { productList } = this.state;
    return (
      <SafeAreaView
        style={styles.cartContainer}
      >
        <View style={styles.cartHeaderContainer}>
          <Header title='Cart' />
        </View>
        <ModalComponent 
          display={this.state.showModal} 
          header='Checkout'
          text='Your oreder is completed.'
          function={this.onCloseModal}
          />
        <View style={styles.cartContentContainer}>
          {this.state.isLoading ?
            <Loader isLoading={this.state.isLoading} title='Loading' />
            : this.renderCardScreen()}
        </View>

      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartProducts: state.cart.products
  }
}

export default connect(mapStateToProps, { fetchCartProducts, removeCartProduct, checkoutProduct })(CartScreen);