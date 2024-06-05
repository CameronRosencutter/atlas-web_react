import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component tests', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should not display the contact link when user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find('a').length).toBe(0);
  });

  it('should display the contact link when user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});
