import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component tests', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
    expect(th.text()).toEqual('test');
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="second test" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="second test" />);
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual('test');
    expect(td.at(1).text()).toEqual('second test');
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});
