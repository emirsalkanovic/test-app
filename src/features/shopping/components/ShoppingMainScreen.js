import React from 'react';
import {
  View,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import styles from '../styles/waiter-main-screen-styles';
import Header from '../../../components/Header';
import ListOfProducts from '../../products/components/ListOfProducts';


class ShoppingMainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      errorMessage: '',
      routes: [
        { key: 'productsList', title: 'List of Products' },
      ],
      //Dummy Data
      listOfProducts: [
        { id: 1, name: 'Pancake', price: 4.25, description: 'A pancake is a flat cake, often thin and round,', quantity: 1, image: 'pancake' },
        { id: 2, name: 'Coffee', price: 1.25, description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.', quantity: 1, image: 'coffee' },
        { id: 3, name: 'Chocolate', price: 7.00, description: 'Chocolate is a preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, which may also be used as a flavoring ingredient in other foods.', quantity: 1, image: 'chocolate' },
        { id: 4, name: 'Beer', price: 12.50, description: 'Beer is one of the oldest and most widely consumed alcoholic drinks in the world,', quantity: 1, image: 'beer' },
        { id: 5, name: 'Bread', price: 1.00, description: 'Bread is a staple food prepared from a dough of flour and water, usually by baking.', quantity: 1, image: 'bread' },
        { id: 6, name: 'Meat', price: 2.50, description: 'Meat is animal flesh that is eaten as food.', quantity: 1, image: 'meat' },
        { id: 7, name: 'Egg', price: 3.40, description: 'Eggs are laid by female animals of many different species.', quantity: 1, image: 'egg' },
        { id: 8, name: 'Milk', price: 7.50, description: 'Milk is a nutrient-rich liquid food produced by the mammary glands of mammals.', quantity: 1, image: 'milk' },
      ],
    }
  }

  changeIndex = (newIndex) => {
    this.setState({
      index: newIndex
    })
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'productsList':
        return (
          <ListOfProducts
            data={this.state.listOfProducts}
            navigation={this.props.navigation}
          />
        );
      default:
        return null;
    }
  }

  renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      getLabelText={(text) => text.route.title}
    />
  );

  handleBackButtonClick = () => true;

  render() {
    const initialLayout = {
      height: 0,
      width: Dimensions.get('window').width
    };
    // const spinnerSize = Platform.OS === 'ios' ? 1 : 50;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerOrderContainer}>
          <Header title="Products" />
        </View>
        <TabView
          initialLayout={initialLayout}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => this.setState({ index })}
          getLabelText={this.getLabelText}
        />
      </SafeAreaView>
    );
  }
}

export default ShoppingMainScreen;