import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return the correct isLoggedIn state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const expectedProps = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('should return false when isUserLoggedIn is false', () => {
    const state = fromJS({
      isUserLoggedIn: false,
    });
    const expectedProps = {
      isLoggedIn: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
