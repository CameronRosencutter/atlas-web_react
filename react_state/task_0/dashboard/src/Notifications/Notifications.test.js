import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={() => {}} displayDrawer={false} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawer} displayDrawer={true} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
