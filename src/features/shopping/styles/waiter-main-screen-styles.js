import { StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_FONT_BLACK,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_PURPLE,
} from '../../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  indicator: {
    backgroundColor: COLOR_PRIMARY_PURPLE
  },

  label: {
    color: COLOR_FONT_BLACK,
    borderTopWidth: 0
  },

  tab: {
    width: windowWidth / 3
  },

  tabbar: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    borderTopWidth: 0
  },

  headerOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
    alignItems: 'center'
  }
})