import { DEFAULT_REQUEST_STATUS, DEFAULT_SERVER_ERROR_MESSAGE } from "../../../config/constants";
import {
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_LOADING,
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT
} from "../../actions/auth/types";

const initialState = {
  user: null,
  requestStatus: DEFAULT_REQUEST_STATUS
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        requestStatus: { loading: true, mainError: null }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        requestStatus: { loading: false, mainError: null }
      }
    case LOGIN_ERROR:
      return {
        ...state,
        requestStatus: { loading: false, mainError: DEFAULT_SERVER_ERROR_MESSAGE }
      }
    case CREATE_ACCOUNT_LOADING:
      return {
        ...state,
        requestStatus: { loading: true, mainError: null }
      }
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: action.payload,
        requestStatus: { loading: false, mainError: null }
      }
    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        requestStatus: { loading: false, mainError: DEFAULT_SERVER_ERROR_MESSAGE }
      }
    case LOGOUT:
      return initialState
    default:
      return state;
  }
}
