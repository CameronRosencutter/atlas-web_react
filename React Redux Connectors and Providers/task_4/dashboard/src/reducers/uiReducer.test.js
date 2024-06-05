import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT 
} from '../actions/uiActionTypes';

// Initial state for comparison
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
    const initialStateModified = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false
    };
    expect(uiReducer(initialStateModified, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAILURE action', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT action', () => {
    const initialStateModified = {
      ...initialState,
      isUserLoggedIn: true
    };
    const action = { type: LOGOUT };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false
    };
    expect(uiReducer(initialStateModified, action)).toEqual(expectedState);
  });
});
