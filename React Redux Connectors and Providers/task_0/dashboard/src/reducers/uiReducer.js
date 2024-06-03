import { fromJS, Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = Map({
  isUserLoggedIn: false,
  // other initial state properties
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.set('courses', fromJS(action.data));
    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);
    default:
      return state;
  }
}
