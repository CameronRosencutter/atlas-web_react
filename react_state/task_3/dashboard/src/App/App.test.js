import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  it('should update the state with logIn', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@example.com', 'password');
    expect(wrapper.state().user).toEqual({
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('should update the state with logOut', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: { email: 'test@example.com', password: 'password', isLoggedIn: true },
    });
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });

  it('should update the state with markNotificationAsRead', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    });
    const instance = wrapper.instance();
    instance.markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ]);
  });
});
