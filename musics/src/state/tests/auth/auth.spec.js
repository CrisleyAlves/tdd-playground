import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import store from '../../store';
import { DEFAULT_SERVER_ERROR_MESSAGE } from '../../../config/constants';
import { mockedAuthenticateSuccess } from './data';
import { authenticate, createAccount, logout } from '../../actions/auth/actions';
import AuthService from '../../../services/AuthService';

describe('Auth - Success reducer behavior', () => {
  beforeEach(() => jest.restoreAllMocks())

  test('authenticate - should authenticate user and set user data in store', async () => {
    <Provider store={store} />

    const authServiceSpy = jest.spyOn(AuthService, 'authenticate').mockReturnValueOnce(mockedAuthenticateSuccess);
    const params = {
      email: 'dummy@dummy.com',
      password: 'password'
    }

    // Given a user that tries to authenticate
    store.dispatch(authenticate(params));

    // Authenticate should be called with params provided
    expect(authServiceSpy).toHaveBeenCalledWith(params)

    // Loading flag should be true
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.loading).toBeTruthy()
    });

    // Should populate state with user token
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.user.token).toBe(mockedAuthenticateSuccess.data.user.token);
    });

    // Loading flag should be false
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.loading).toBeFalsy()
    });
  })

  test('createAccount - should create a new account and set user data in store', async () => {
    <Provider store={store} />

    const authServiceSpy = jest.spyOn(AuthService, 'createAccount').mockReturnValueOnce(mockedAuthenticateSuccess);
    const params = {
      firstName: 'Crisley',
      lastName: 'Alves',
      preferences: ['rock', 'psy', 'funk'],
      email: 'dummy@dummy.com',
      password: 'password'
    }

    // Given a user that tries to create a new account
    store.dispatch(createAccount(params));

    // Create Account should be called with params provided
    expect(authServiceSpy).toHaveBeenCalledWith(params)

    // Loading flag should be true
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.loading).toBeTruthy()
    });

    // Should populate state with user token
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.user.token).toBe(mockedAuthenticateSuccess.data.user.token);
    });

    // Loading flag should be false
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.loading).toBeFalsy()
    });
  })

  test('logout - should logout user and clear user data from store', async () => {
    <Provider store={store} />

    // Given a user that it's already authenticated
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.user.token).toBe(mockedAuthenticateSuccess.data.user.token);
    });

    // Given a user that tries to logout
    store.dispatch(logout());

    // User should be removed from state
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.user).toBeNull()
    });
  })
});

describe('Auth - Error reducer behavior', () => {
  beforeEach(() => jest.restoreAllMocks())

  test('authenticate - should reach catch block and set error in the state', async () => {
    <Provider store={store} />

    const authServiceSpy = jest.spyOn(AuthService, 'authenticate').mockReturnValue(null);
    const params = {
      email: 'dummy@dummy.com',
      password: 'password'
    }

    // Given a user that tries to authenticate
    store.dispatch(authenticate(params));

    // Authenticate should be called with params provided
    expect(authServiceSpy).toHaveBeenCalledWith(params)

    // Loading flag should be true
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.loading).toBeTruthy()
    });

    // Should populate error state when an error occurred
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.mainError).toBe(DEFAULT_SERVER_ERROR_MESSAGE);
    });

    // Should populate error state when an error occurred
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.user).toBeNull();
    });

    // Loading flag should be false
    await waitFor(() => {
      const { auth } = store.getState();
      expect(auth.requestStatus.loading).toBeFalsy()
    });
  })
});
