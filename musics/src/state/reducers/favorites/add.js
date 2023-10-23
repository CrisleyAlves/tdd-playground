import { DEFAULT_REQUEST_STATUS } from "../../../config/constants";
import { ADD_FAVORITE_ERROR, ADD_FAVORITE_LOADING, ADD_FAVORITE_SUCCESS } from "../../actions/favorites/types";

const initialState = {
  addFavoriteRequestStatus: DEFAULT_REQUEST_STATUS
};

export default function addFavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_LOADING:
      return {
        addFavoriteRequestStatus: { loading: true, mainError: null }
      }
    case ADD_FAVORITE_SUCCESS:
      return {
        addFavoriteRequestStatus: { loading: false, mainError: null }
      }
    case ADD_FAVORITE_ERROR:
      return {
        addFavoriteRequestStatus: { loading: false, mainError: 'An error occured, please try again later' }
      }
    default:
      return state;
  }
}
