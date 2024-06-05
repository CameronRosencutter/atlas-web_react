import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const wrapper = shallow(<Header isLoggedIn={true} user={{ isLoggedIn: true, email: 'test@test.com' }} />);
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@test.com');
  });

  it('calls logOut function on click of logout link', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<Header isLoggedIn={true} user={{ isLoggedIn: true, email: 'test@test.com' }} logOut={logOutMock} />);
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
