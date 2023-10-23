import { DEFAULT_REQUEST_STATUS, DEFAULT_SERVER_ERROR_MESSAGE } from "../../../config/constants";
import { ERROR_RECOMMENDED_MUSICS, LOADING_RECOMMENDED_MUSICS, SUCCESS_RECOMMENDED_MUSICS } from "../../actions/musics/types";

const initialState = {
  data: [],
  requestStatus: DEFAULT_REQUEST_STATUS
};

export default function recommendedMusicsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_RECOMMENDED_MUSICS:
      return {
        ...state,
        requestStatus: { loading: true, mainError: null }
      }
    case SUCCESS_RECOMMENDED_MUSICS:
      return {
        data: action.payload,
        requestStatus: DEFAULT_REQUEST_STATUS
      }
    case ERROR_RECOMMENDED_MUSICS:
      return {
        ...state,
        requestStatus: { loading: false, mainError: DEFAULT_SERVER_ERROR_MESSAGE }
      }
    default:
      return state;
  }
}
