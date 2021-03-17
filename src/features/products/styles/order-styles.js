import { StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_PRIMARY_WHITE,
  COLOR_NEW_FONT_BLACK,
  COLOR_NEW_FONT_GRAY,
  COLOR_PRIMARY_PURPLE,
  COLOR_PRIMARY_ERROR_RED,
} from '../../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  headerOrderContainer: {
    marginLeft: '3%',
    marginTop: '3%'
  },

  listDivider: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    width: '100%',
    zIndex: 0,
    position: 'absolute',
  },

  listHolder: {
    flex: 1,
    marginTop: '2%',
    backgroundColor: 'yellow'
  },

  singleProductContainer: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLOR_NEW_FONT_GRAY,
    padding: '2%',
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  singleProductName: {
    color: COLOR_NEW_FONT_BLACK,
  },

  productDetailsContainer: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    flex: 1,
  },

  productDetailsContentHolder: {
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productDetailsBox: {
    height: '90%',
    width: '100%',
    backgroundColor: COLOR_PRIMARY_WHITE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: COLOR_PRIMARY_PURPLE
  },

  producDetailsDescriptionHolder: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productDetailsButtonHolder: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productDetailsButton: {
    backgroundColor: COLOR_PRIMARY_PURPLE,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  productDetailsButtonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLOR_PRIMARY_WHITE
  },

  singleTextHolder: {
    display: 'flex',
    borderBottomColor: COLOR_PRIMARY_PURPLE,
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: '3%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  productDetailsLabel: {
    color: COLOR_NEW_FONT_GRAY,
    fontSize: 20,
    marginBottom: '1%'
  },

  productDetailsText: {
    color: COLOR_NEW_FONT_BLACK,
    fontSize: 20,
    marginBottom: '1%',
    textAlign: 'center'
  },

  errorMessageHolder: {
    margin: '1%',
    color: 'red',
    marginBottom: '2%'
  },

  errorMessage: {
    color: COLOR_PRIMARY_ERROR_RED,
    fontWeight: 'bold'
  },

  detailsImageHolder:{
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  detailsImage: {
    height: 80,
    width: 80
  },
})