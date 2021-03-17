import React from 'react';
import { View, ImageBackground } from 'react-native';

import styles from '../styles/auth-styles';
import TextButton from '../../../components/TextButton';


const LandingScreen = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/img/bakcground_image.png')}
    >
      <View style={styles.buttonsContainer}>
        <TextButton
          title="Login"
          titleStyle={styles.loginButtonTitle}
          onPress={() => props.navigation.navigate('Login')}
          buttonStyle={styles.loginButtonLanding}
        />
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;