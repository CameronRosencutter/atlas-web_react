// task_5/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('should not rerender when props are the same', () => {
    const wrapper = shallow(<Notifications notifications={[]} />);
    const instance = wrapper.instance();
    const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ notifications: [] }); // Updating props with the same list
    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.find('.notifications').exists()).toBe(true); // Ensure component did not rerender
  });

  it('should rerender when props are different', () => {
    const wrapper = shallow(<Notifications notifications={[]} />);
    const instance = wrapper.instance();
    const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');
    wrapper.setProps({ notifications: [{ id: 1, value: 'Notification 1' }] }); // Updating props with a longer list
    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.find('.notifications').exists()).toBe(true); // Ensure component rerendered
  });
});
