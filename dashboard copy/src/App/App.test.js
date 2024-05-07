import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import CourseList from './CourseList';

describe('App Component', () => {
  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display CourseList initially', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  describe('when isLoggedIn is true', () => {
    it('does not display Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('displays CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });
});