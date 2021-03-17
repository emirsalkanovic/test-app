import { LOGIN_ACTION } from '../actions/auth-actions-types';

const SIGNUP_INITIAL_STATE = {
  isAuthenticated: false
};

export function loginReducer(state = SIGNUP_INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ACTION:
        return { ...state, isAuthenticated: true };
    default:
      return state;
  }
}