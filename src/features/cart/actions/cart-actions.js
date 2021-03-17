import { FETCH_CART_PRODUCTS, ADD_CART_PRODUCT, DELETE_CART_PRODUCT, CHECKOUT_PRODUCT } from "./cart-action-types";

export const fetchCartProducts = () => async dispatch => {
	dispatch({
		type: FETCH_CART_PRODUCTS,
		payload: response.data
	})
};

export const addProductToCart = (product) => async dispatch => {
	dispatch({
		type: ADD_CART_PRODUCT,
		payload: product
	})
}

export const removeCartProduct = (product) => async dispatch => {
	dispatch({
		type: DELETE_CART_PRODUCT,
		payload: product
	})
}

export const checkoutProduct = () => async dispatch => {
	dispatch({
		type: CHECKOUT_PRODUCT
	})
}