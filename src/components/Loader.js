import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLOR_PRIMARY_PURPLE, COLOR_NEW_FONT_GRAY } from '../assets/colors/colors';

const Loader = (props) => {
  const { isLoading } = props;
  return isLoading && (
    <View style={styles.loaderContainer}>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={COLOR_PRIMARY_PURPLE} />
      </View>
      {props.title ?
        <Text style={styles.loaderText}>{props.title}</Text>
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loaderText: {
    color: COLOR_NEW_FONT_GRAY,
    alignSelf: 'center',
    marginTop: '5%'
  }
});

export default Loader;