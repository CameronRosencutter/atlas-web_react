// src/reducers/uiReducer.test.js
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' }).toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const currentState = initialState.set('isNotificationDrawerVisible', true);
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    expect(uiReducer(currentState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});
