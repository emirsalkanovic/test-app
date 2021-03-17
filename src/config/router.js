import 'react-native-gesture-handler';
import * as React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../features/auth/components/SplashScreen';
import LandingScreen from '../features/auth/components/LandingScreen';
import LoginScreen from '../features/auth/components/LoginScreen';
import { COLOR_PRIMARY_WHITE, COLOR_PRIMARY_PURPLE } from '../assets/colors/colors';
import ProductDetails from '../features/products/components/ProductDetails';
import CartScreen from '../features/cart/components/CartScreen';
import ShoppingMainScreen from '../features/shopping/components/ShoppingMainScreen';


const AppStack = createStackNavigator();

function Router(props) {
  const isAuthenticated = props ?.login ?.isAuthenticated;
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <>
            <AppStack.Screen
              name='ShoppingList'
              component={ShopinListDashbord}
            />
            <AppStack.Screen name='ProductDetails' component={ProductDetails} />
          </>
        ) : (
            <>
              <AppStack.Screen name='Splash' component={SplashScreen} />
              <AppStack.Screen name='Landing' component={LandingScreen} />
              <AppStack.Screen name='Login' component={LoginScreen} />
            </>
          )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const ShoppingListStack = createBottomTabNavigator();

function ShopinListDashbord() {
  return (
    <ShoppingListStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const { name } = route;
          let icon;
          switch (name) {
            case 'Products':
              icon = focused
                ? require('../assets/img/bottom_nav_icon_cop.png')
                : require('../assets/img/bottom_nav_icon_cop_unselected.png');
              return <Image source={icon} style={{ width: 24, height: 24, marginTop: '1%' }} />;
            case 'Cart':
              icon = focused
                ? require('../assets/img/certificate_selected.png')
                : require('../assets/img/certificate.png')
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            default:
              break;
          }
        }
      })}
      swipeEnabled={true}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: COLOR_PRIMARY_PURPLE,
        inactiveTintColor: COLOR_PRIMARY_WHITE,
        header: null,
        indicatorStyle: { backgroundColor: 'black' },
        style: {
          backgroundColor: 'white',
          fontSize: 18,
          textAlign: 'center',
        },
        iconStyle: {
          width: 47,
          height: 47
        }
      }
      }
    >
      <ShoppingListStack.Screen
        name="Products"
        component={ShoppingMainScreen}
      />
      <ShoppingListStack.Screen
        name="Cart"
        component={CartScreen}
      />
    </ShoppingListStack.Navigator>
  );
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(Router);

