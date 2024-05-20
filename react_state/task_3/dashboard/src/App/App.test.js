import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import AppContext from './AppContext';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    expect(wrapper.state('user')).toEqual({
      email: 'test@test.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: 'test@test.com',
        password: 'password',
        isLoggedIn: true,
      },
    });
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });
});
