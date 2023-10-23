import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';

import store from '../../store';
import { mockedGetAllMusicsSuccess } from './data';

import { getMusicById, getMusics } from '../../actions/musics/actions';
import MusicService from '../../../services/MusicService';

describe('Musics - Success reducer behavior', () => {
  test('getAllMusics - should populate state of list of musics', async () => {
    <Provider store={store} />

    jest.spyOn(MusicService, 'getMusics').mockReturnValueOnce(mockedGetAllMusicsSuccess);

    // Given a user case that we need to get all musics
    store.dispatch(getMusics());

    // Loading flag should be true
    await waitFor(() => {
      const { musicsList } = store.getState();
      expect(musicsList.requestStatus.loading).toBeTruthy()
    });

    // Musics list should be populated with result data
    await waitFor(() => {
      const { musicsList } = store.getState();
      expect(musicsList.data.length).toBe(1)
    });

    // Loading flag should be false
    await waitFor(() => {
      const { musicsList } = store.getState();
      expect(musicsList.requestStatus.loading).toBeFalsy()
    });
  })

  test('getAllMusics - should get all musics based on params', async () => {
    <Provider store={store} />

    const spyGetMusics = jest.spyOn(MusicService, 'getMusics').mockReturnValueOnce(mockedGetAllMusicsSuccess);
    const params = {
      value: 'name',
      type: 'artist',
      category: 'all'
    }

    // Given a user case that we need to get all musics based on params
    store.dispatch(getMusics(params));

    expect(spyGetMusics).toHaveBeenCalledWith(params)

    // Loading flag should be true
    await waitFor(() => {
      const { musicsList } = store.getState();
      expect(musicsList.requestStatus.loading).toBeTruthy()
    });

    // Musics list should be populated with result data
    await waitFor(() => {
      const { musicsList } = store.getState();
      expect(musicsList.data.length).toBe(1)
    });

    // Loading flag should be false
    await waitFor(() => {
      const { musicsList } = store.getState();
      expect(musicsList.requestStatus.loading).toBeFalsy()
    });
  })

  test('getMusicById - should populate state by music id', async () => {
    <Provider store={store} />

    const spyGetMusicById = jest.spyOn(MusicService, 'getMusicById').mockReturnValueOnce(mockedGetAllMusicsSuccess);

    const params = {
      id: 123123
    }

    // Given a user case that we need to get music detail by id
    store.dispatch(getMusicById(params.id));

    // Endpoint should be called with params provided
    expect(spyGetMusicById).toHaveBeenCalledWith(params.id);

    // Loading flag should be false
    await waitFor(() => {
      const { musicDetail } = store.getState();
      expect(musicDetail.requestStatus.loading).toBeTruthy()
    });

    // Store should be populated with music details
    const expectedData = mockedGetAllMusicsSuccess.data.musics[0]
    await waitFor(() => {
      const { musicDetail } = store.getState();
      expect(musicDetail.data).toMatchObject(expectedData)
    });

    // Loading flag should be false
    await waitFor(() => {
      const { musicDetail } = store.getState();
      expect(musicDetail.requestStatus.loading).toBeFalsy()
    });
  })
});
