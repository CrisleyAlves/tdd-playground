import { DEFAULT_REQUEST_STATUS } from "../../../config/constants";
import { REMOVE_FAVORITE_ERROR, REMOVE_FAVORITE_LOADING, REMOVE_FAVORITE_SUCCESS } from "../../actions/favorites/types";

const initialState = {
  removeFavoriteRequestStatus: DEFAULT_REQUEST_STATUS
};

export default function removeFavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_FAVORITE_LOADING:
      return {
        removeFavoriteRequestStatus: { loading: true, mainError: null }
      }
    case REMOVE_FAVORITE_SUCCESS:
      return {
        removeFavoriteRequestStatus: { loading: false, mainError: null }
      }
    case REMOVE_FAVORITE_ERROR:
      return {
        removeFavoriteRequestStatus: { loading: false, mainError: 'An error occured, please try again later' }
      }
    default:
      return state;
  }
}
