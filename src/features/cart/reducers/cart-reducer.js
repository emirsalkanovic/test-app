import { FETCH_CART_PRODUCTS, ADD_CART_PRODUCT, DELETE_CART_PRODUCT, CHECKOUT_PRODUCT } from "../actions/cart-action-types";

const INITIAL_STATE = {
	products: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_CART_PRODUCTS:
			return state;
		case ADD_CART_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload]
			};
		case DELETE_CART_PRODUCT:
			return {
				...state,
				products: action.payload
			};

		case CHECKOUT_PRODUCT:
			state = INITIAL_STATE
			return state;

		default:
			return state;
	}
};