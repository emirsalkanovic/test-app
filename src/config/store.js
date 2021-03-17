import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import cartReducer from '../features/cart/reducers/cart-reducer';
import { loginReducer } from '../features/auth/reducers/auth-reducers';


export default function configureStore() {
	const initialState = {};
	const middleware = applyMiddleware(ReduxThunk, logger);
	const reducers = combineReducers({
			cart: cartReducer,
			login: loginReducer
	});

	return createStore(reducers, initialState, middleware);
}
