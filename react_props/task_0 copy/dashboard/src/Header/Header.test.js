// Import necessary dependencies and the component to be tested
import React from 'react';
import { shallow } from 'enzyme'; // Import shallow renderer from Enzyme
import Header from './Header'; // Import the Header component

// Describe block for Header component tests
describe('Header Component', () => {
  // Test to check if the Header component renders without crashing
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // Test to verify that the Header component renders <img> and <h1> tags
  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1); // Check if one <img> tag is rendered
    expect(wrapper.find('h1')).toHaveLength(1); // Check if one <h1> tag is rendered
  });
});
