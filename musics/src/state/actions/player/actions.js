import { PAUSE_MUSIC, START_MUSIC, STOP_MUSIC } from './types';

export const startMusic = music => dispatch => dispatch({ type: START_MUSIC, payload: music });

export const pauseMusic = () => dispatch => dispatch({ type: PAUSE_MUSIC });

export const stopMusic = () => dispatch => dispatch({ type: STOP_MUSIC });
