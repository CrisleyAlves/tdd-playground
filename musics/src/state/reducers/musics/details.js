import { DEFAULT_REQUEST_STATUS } from "../../../config/constants";
import {
  ERROR_GET_MUSIC_BY_ID,
  SUCCESS_GET_MUSIC_BY_ID,
  LOADING_GET_MUSIC_BY_ID
} from "../../actions/musics/types";

const initialState = {
  data: null,
  requestStatus: DEFAULT_REQUEST_STATUS
};

export default function musicsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_GET_MUSIC_BY_ID:
      return {
        ...state,
        requestStatus: { loading: true, mainError: null }
      }
    case SUCCESS_GET_MUSIC_BY_ID:
      return {
        data: action.payload,
        requestStatus: { loading: false, mainError: null }
      }
    case ERROR_GET_MUSIC_BY_ID:
      return {
        ...state,
        requestStatus: { loading: false, mainError: action.payload }
      }
    default:
      return state;
  }
}
