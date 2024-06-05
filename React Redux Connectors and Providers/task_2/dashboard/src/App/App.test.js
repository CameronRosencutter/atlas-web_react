import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { App, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import AppContext from './AppContext';

// Mock data
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "Default Notification" },
  { id: 2, type: "urgent", value: "Urgent Notification" },
  { id: 3, type: "urgent", html: { __html: "<b>Html</b> notification" } },
];

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a Header component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('renders a Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('renders a Login component when not logged in', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.find(Login).length).toBe(1);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('renders a CourseList component when logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    expect(wrapper.find(Login).length).toBe(0);
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('does not crash when marking a notification as read', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    expect(() => {
      wrapper.instance().markNotificationAsRead(1);
    }).not.toThrow();
  });

  it('markNotificationAsRead updates the state correctly', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    wrapper.setState({ listNotifications });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications).toEqual(listNotifications.filter(notification => notification.id !== 1));
  });
});

describe('Redux tests', () => {
  it('should return the right object when calling mapStateToProps', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
