import {
  ERROR_GET_ALL_MUSICS,
  ERROR_GET_MUSIC_BY_ID,
  SUCCESS_GET_MUSIC_BY_ID,
  LOADING_GET_ALL_MUSICS,
  LOADING_GET_MUSIC_BY_ID,
  SUCCESS_GET_ALL_MUSICS
} from './types';
import MusicService from '../../../services/MusicService';

// Params -> name, album, artist
export const getMusics = params => async (dispatch) => {
  dispatch({ type: LOADING_GET_ALL_MUSICS });

  try {
    const { data } = await MusicService.getMusics(params);
    const { musics } = data;

    dispatch({
      type: SUCCESS_GET_ALL_MUSICS,
      payload: musics,
    });
  } catch (error) {
    dispatch({
      type: ERROR_GET_ALL_MUSICS
    })
  }
};

export const getMusicById = (id) => async (dispatch) => {
  dispatch({ type: LOADING_GET_MUSIC_BY_ID });

  try {
    const { data } = await MusicService.getMusicById(id);
    const { musics } = data;

    dispatch({
      type: SUCCESS_GET_MUSIC_BY_ID,
      payload: musics[0],
    });
  } catch (error) {
    dispatch({
      type: ERROR_GET_MUSIC_BY_ID
    })
  }
};
