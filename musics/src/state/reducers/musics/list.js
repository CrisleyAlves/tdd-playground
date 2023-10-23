import { DEFAULT_REQUEST_STATUS, DEFAULT_SERVER_ERROR_MESSAGE } from "../../../config/constants";
import {
  SUCCESS_GET_ALL_MUSICS,
  LOADING_GET_ALL_MUSICS,
  ERROR_GET_ALL_MUSICS
} from "../../actions/musics/types";

const initialState = {
  data: [],
  requestStatus: DEFAULT_REQUEST_STATUS
};

export default function musicsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_GET_ALL_MUSICS:
      return {
        ...state,
        requestStatus: { loading: true, mainError: null }
      }
    case SUCCESS_GET_ALL_MUSICS:
      return {
        data: action.payload,
        requestStatus: DEFAULT_REQUEST_STATUS
      }
    case ERROR_GET_ALL_MUSICS:
      return {
        ...state,
        requestStatus: { loading: false, mainError: DEFAULT_SERVER_ERROR_MESSAGE }
      }
    default:
      return state;
  }
}
