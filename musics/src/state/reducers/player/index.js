import { DEFAULT_REQUEST_STATUS, PLAYER_STATUS } from "../../../config/constants";
import { PAUSE_MUSIC, START_MUSIC, STOP_MUSIC } from "../../actions/player/types";

const initialState = {
  currentMusic: null,
  status: null,
  // audio from web/lib will provide the current time, do we need to store it (?)
  requestStatus: DEFAULT_REQUEST_STATUS // do we need this (?)
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case START_MUSIC:
      return {
        currentMusic: action.payload,
        status: PLAYER_STATUS.PLAYING,
        requestStatus: { loading: false, mainError: null }
      }
    case PAUSE_MUSIC:
      return {
        ...state,
        status: PLAYER_STATUS.PAUSED,
      }
    case STOP_MUSIC:
      return {
        ...state,
        status: PLAYER_STATUS.STOPPED,
      }
    default:
      return state;
  }
}
