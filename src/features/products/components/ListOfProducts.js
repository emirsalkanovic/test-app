import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from '../styles/order-styles';

const ListOfProducts = (props) => {

  const { data } = props;

  const onSingleProductPress = (product) => {
    props.navigation.navigate('ProductDetails',{product}) 
  }

  const renderSingleProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.singleProductContainer}
        onPress={() => onSingleProductPress(item)}
      > 
        <Text style={styles.singleProductName}>{item.name}</Text>
        <Text style={styles.singleProductName}>$ {item.price.toFixed(2)}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.listDivider}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          style={styles.readyOrderList}
          data={data}
          renderItem={(item) => renderSingleProduct(item)}
          keyExtractor={(itemdata, index) => index.toString()}
          refreshing={false}
        />
      </View>
    </View>
  );
}

export default ListOfProducts;