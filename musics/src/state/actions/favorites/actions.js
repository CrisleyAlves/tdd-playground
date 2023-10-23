import { FAVORITES_ERROR, FAVORITES_LOADING, FAVORITES_SUCCESS } from './types';
import MusicService from '../../../services/MusicService';

export const getFavoriteMusics = () => async (dispatch) => {
  dispatch({ type: FAVORITES_LOADING });

  try {
    const { data } = await MusicService.getFavoritesMusics()
    const { favorites } = data;

    dispatch({
      type: FAVORITES_SUCCESS,
      payload: favorites,
    });
  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR
    })
  }
};

export const addMusicToFavorites = id => async (dispatch) => {
  dispatch({ type: FAVORITES_LOADING });

  try {
    const { data } = await MusicService.addMusicToFavorites(id);
    const { favorites } = data;

    dispatch({
      type: FAVORITES_SUCCESS,
      payload: favorites,
    });
  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR
    })
  }
};

export const removeMusicFromFavorites = id => async (dispatch) => {
  dispatch({ type: FAVORITES_LOADING });

  try {
    const { data } = await MusicService.removeMusicFromFavorites(id);
    const { favorites } = data;

    dispatch({
      type: FAVORITES_SUCCESS,
      payload: favorites,
    });
  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR
    })
  }
};