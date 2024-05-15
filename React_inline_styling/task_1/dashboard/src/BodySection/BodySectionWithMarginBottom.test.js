import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('BodySectionWithMarginBottom Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title">test children</BodySectionWithMarginBottom>);
    expect(wrapper.exists()).toBe(true);
  });

  // Add more tests as needed
});
