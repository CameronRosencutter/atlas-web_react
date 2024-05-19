import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('NotificationItem Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html for type and value props', () => {
    const wrapper = shallow(<NotificationItem id={1} type="urgent" value="test" markAsRead={() => {}} />);
    expect(wrapper.html()).toContain('test');
    expect(wrapper.html()).toContain('data-notification-type="urgent"');
  });

  it('renders correct html for html prop', () => {
    const html = { __html: '<span>test</span>' };
    const wrapper = shallow(<NotificationItem id={1} type="urgent" html={html} markAsRead={() => {}} />);
    expect(wrapper.html()).toContain('<span>test</span>');
  });
});
