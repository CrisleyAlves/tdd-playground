import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';

import { PLAYER_STATUS } from '../../../config/constants';
import { mockedGetAllMusicsSuccess } from './data';
import store from '../../store';

import { pauseMusic, startMusic, stopMusic } from '../../actions/player/actions';

describe('Player - Success reducer behavior', () => {
  test('startMusic - should set a music in player redux store', async () => {
    <Provider store={store} />

    const selectedMusic = mockedGetAllMusicsSuccess.data.musics[0];

    // Given a user that tries to start a music
    store.dispatch(startMusic(selectedMusic));

    // Selected music should be stored in the player state
    await waitFor(() => {
      const { player } = store.getState();
      expect(player.currentMusic.id).toBe(selectedMusic.id)
    });

    // Selected music should be playing
    await waitFor(() => {
      const { player } = store.getState();
      expect(player.status).toBe(PLAYER_STATUS.PLAYING)
    });
  })

  test('pauseMusic - should pause the music', async () => {
    <Provider store={store} />

    const selectedMusic = mockedGetAllMusicsSuccess.data.musics[0];

    // Populating player store with a music
    store.dispatch(startMusic(selectedMusic));

    // Given a user that has a music current playing
    await waitFor(() => {
      const { player } = store.getState();
      expect(player.status).toBe(PLAYER_STATUS.PLAYING)
    });

    // When user clicks on PAUSE
    store.dispatch(pauseMusic())

    // Player should pause the music
    await waitFor(() => {
      const { player } = store.getState();
      expect(player.status).toBe(PLAYER_STATUS.PAUSED)
    });
  })

  test('stopMusic - should stop the music', async () => {
    <Provider store={store} />

    const selectedMusic = mockedGetAllMusicsSuccess.data.musics[0];

    // Populating player store with a music
    store.dispatch(startMusic(selectedMusic));

    // Given a user that has a music currentplaying
    await waitFor(() => {
      const { player } = store.getState();
      expect(player.status).toBe(PLAYER_STATUS.PLAYING)
    });

    // When user clicks on STOP
    store.dispatch(stopMusic())

    // Player should STOP the music
    await waitFor(() => {
      const { player } = store.getState();
      expect(player.status).toBe(PLAYER_STATUS.STOPPED)
    });
  })
})