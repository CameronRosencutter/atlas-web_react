// CourseList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const { container } = render(<CourseList />);
    expect(container.querySelector('#CourseList')).toBeInTheDocument();
  });

  it('renders the 5 different rows', () => {
    const { getByText } = render(<CourseList />);
    expect(getByText('Available courses')).toBeInTheDocument();
    expect(getByText('Course name')).toBeInTheDocument();
    expect(getByText('ES6')).toBeInTheDocument();
    expect(getByText('Webpack')).toBeInTheDocument();
    expect(getByText('React')).toBeInTheDocument();
  });
});
