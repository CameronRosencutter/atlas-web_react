// CourseListRow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow isHeader textFirstCell="Header" />
        </tbody>
      </table>
    );

    const headerCell = getByText('Header');
    expect(headerCell.colSpan).toBe(2);
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow isHeader textFirstCell="Header" textSecondCell="Header 2" />
        </tbody>
      </table>
    );

    const headerCell1 = getByText('Header');
    const headerCell2 = getByText('Header 2');
    expect(headerCell1).toBeInTheDocument();
    expect(headerCell2).toBeInTheDocument();
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />
        </tbody>
      </table>
    );

    const cell1 = getByText('Cell 1');
    const cell2 = getByText('Cell 2');
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
  });
});
