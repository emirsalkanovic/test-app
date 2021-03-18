import React from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLOR_FONT_BLACK, COLOR_PRIMARY_WHITE } from '../assets/colors/colors';

//Header bar with transparent background used for login-signup
const TransparentHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backIconHolder}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../assets/img/arrow-left.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerTextHolder}>
        <Text style={styles.headerTitle}> {props.title}</Text>
      </View>
      <View style={styles.settingsIconHolder}>
        {props.settings === true ?
          <TouchableOpacity onPress={() => props.openSettings()}>
            <Image
              style={styles.settingsIcon}
              source={require('../assets/img/icon_options.png')}
            />
          </TouchableOpacity>
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: COLOR_PRIMARY_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
    marginBottom: '3%',
  },
  headerTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    color: COLOR_FONT_BLACK,
    textAlign: 'center'
  },
  backIcon: {
    marginLeft: '6%',
    height: 20,
    width: 20
  },
  backIconHolder: {
    flex: 1,
  },
  headerTextHolder: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsIconHolder: {
    flex: 1,
  },
  settingsIcon: {
    height: 22,
    width: 22,
    marginRight: '6%',
    alignSelf: 'flex-end'
  }
});

export default TransparentHeader;