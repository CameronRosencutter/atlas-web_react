import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  it('should have a disabled submit button by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable the submit button when both email and password are provided', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('should call handleLoginSubmit on form submission', () => {
    const wrapper = shallow(<Login />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleLoginSubmit');
    instance.forceUpdate();
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(instance.handleLoginSubmit).toHaveBeenCalled();
  });

  it('should update isLoggedIn state to true on form submission', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });
});
