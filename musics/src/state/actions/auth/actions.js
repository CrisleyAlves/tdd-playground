import {
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_LOADING,
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT
} from './types';
import AuthService from '../../../services/AuthService'

export const createAccount = params => async (dispatch) => {
  dispatch({ type: CREATE_ACCOUNT_LOADING });

  try {
    const { data } = await AuthService.createAccount(params)
    const { user } = data;

    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ACCOUNT_ERROR
    })
  }
};

export const authenticate = params => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  try {
    const { data } = await AuthService.authenticate(params)
    const { user } = data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR
    })
  }
};

export const logout = () => dispatch => dispatch({ type: LOGOUT });
