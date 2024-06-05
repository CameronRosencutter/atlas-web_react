import { fromJS } from 'immutable';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

// Initial state
const initialState = fromJS({
  notifications: [],
  loading: false
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);

    case FETCH_NOTIFICATIONS_SUCCESS:
      // Merge the fetched notifications into the current state
      return state.mergeDeep({
        notifications: action.payload
      });

    default:
      return state;
  }
};

export default notificationReducer;
