import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer tests', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {});
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({})
    };
    expect(initialState).toEqual(expectedState);
  });
});
