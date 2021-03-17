import React from 'react';
import { ImageBackground, Text } from 'react-native';
import styles from '../styles/auth-styles';

class SplashScreen extends React.Component {
  handleSplashLoading = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  };

  async componentDidMount() {
    const data = await this.handleSplashLoading();

    if (data !== null) {
      this.props.navigation.navigate('Landing');
    }
  }
  
  render() {
    return (
      <ImageBackground
        source={require('../../../assets/img/bakcground_image.png')}
        style={styles.splashContainer}
      >
      <Text style={styles.logoText}>
        Shopping App
      </Text>
      </ImageBackground>
    );
  }
}

export default SplashScreen;
