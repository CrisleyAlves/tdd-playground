import { DEFAULT_REQUEST_STATUS } from "../../../config/constants";
import { FAVORITES_ERROR, FAVORITES_LOADING, FAVORITES_SUCCESS } from "../../actions/favorites/types";

const initialState = {
  favorites: [],
  favoritesRequestStatus: DEFAULT_REQUEST_STATUS
};

// @TODO
// add, remove and maybe list could be handled by one single reducer providing just a namespace
export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITES_LOADING:
      return {
        ...state,
        favoritesRequestStatus: { loading: true, mainError: null }
      }
    case FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
        favoritesRequestStatus: { loading: false, mainError: null }
      }
    case FAVORITES_ERROR:
      return {
        ...state,
        favoritesRequestStatus: { loading: false, mainError: 'An error occured, please try again later' }
      }
    default:
      return state;
  }
}
