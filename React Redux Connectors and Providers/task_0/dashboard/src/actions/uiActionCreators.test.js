import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when loginRequest is successful', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({ });

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN and LOGIN_FAILURE when loginRequest fails', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({ });

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
