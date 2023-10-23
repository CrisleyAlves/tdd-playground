import { combineReducers } from 'redux';

import musicDetail from './musics/details';
import musicsList from './musics/list';
import recommendedMusics from './musics/recommended';
import player from './player/index';
import auth from './auth/index';

export default combineReducers({
  musicDetail,
  musicsList,
  recommendedMusics,
  auth,
  player
});
