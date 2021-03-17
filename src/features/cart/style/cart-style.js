import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY_WHITE, COLOR_BUTTON_LIGHT_GRAY, COLOR_FONT_GRAY, COLOR_PRIMARY_ERROR_RED, COLOR_LIGHT_GRAY_BACKGROUND, COLOR_PRIMARY_BLUE, COLOR_NEW_FONT_BLACK, COLOR_PRIMARY_PURPLE, COLOR_PRIMARY_PURPLE_DARK } from '../../../assets/colors/colors';

export default StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  cartHeaderContainer: {
    marginLeft: '3%',
  },

  cartContentContainer: {
    marginLeft: '5%',
    marginRight: '5%'
  },

  emptyContetnContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  emptyContentText: {
    color: COLOR_NEW_FONT_BLACK,
    fontSize: 20,
    fontWeight: 'bold'
  },

  singleProductContainer: {
    marginBottom: '1%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PRIMARY_PURPLE
  },

  singleProductItem:{
    flex: 1.5,
    justifyContent: 'center',
    alignItems:'center',
  },

  singleProductText:{
    flex: 6,
    color: COLOR_NEW_FONT_BLACK,
    fontSize: 16
  },

  cartButton: {
    backgroundColor: COLOR_PRIMARY_PURPLE,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  cartButtontText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLOR_PRIMARY_WHITE
  },

  cartListContainer: {
    width: '100%',
    height: '95%',
  },
 
  cartListHolder: {
    flex: 3,
  },

  cartListButtonHolder: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  totalAmountText: {
    color: COLOR_PRIMARY_PURPLE_DARK,
    fontSize: 20,
    fontWeight: 'bold'
  },

  cartHeaderList: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },

  primaryCartListItem: {
    flex: 6,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },

  cartListItem: {
    flex: 1.5,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  },

  cartListQuantityButtonHolder: {
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },

  cartListQuantityButton: {
    color: COLOR_PRIMARY_PURPLE,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center',
    textAlignVertical: 'center'
  },

  removeButton: {
    color: COLOR_PRIMARY_WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  singleProductItemRemoveButton: {
    backgroundColor: COLOR_PRIMARY_ERROR_RED,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderColor: COLOR_PRIMARY_WHITE,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center' 
  }

})