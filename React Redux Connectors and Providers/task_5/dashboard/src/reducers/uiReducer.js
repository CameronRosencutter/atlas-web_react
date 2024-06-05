import { fromJS } from 'immutable';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from '../actions/uiActionTypes';

const initialState = fromJS({
  isNotificationDrawerVisible: false,
  user: null,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN:
      return state.set('user', action.user);

    case LOGOUT:
      return state.set('user', null);

    default:
      return state;
  }
};

export default uiReducer;
