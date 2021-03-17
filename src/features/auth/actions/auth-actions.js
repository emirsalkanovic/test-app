import { LOGIN_ACTION } from './auth-actions-types';

export const loginAction = (username, password) =>  async dispatch => {
  let userCred = {
    username,
    password
  }
  dispatch({
    type: LOGIN_ACTION,
    payload: userCred
  })
}