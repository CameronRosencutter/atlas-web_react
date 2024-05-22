import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const contextValue = { user: { isLoggedIn: false, email: '' }, logOut: jest.fn() };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true, email: 'test@test.com' }, logOut: jest.fn() };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@test.com');
  });

  it('calls logOut function on click of logout link', () => {
    const logOutMock = jest.fn();
    const contextValue = { user: { isLoggedIn: true, email: 'test@test.com' }, logOut: logOutMock };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
