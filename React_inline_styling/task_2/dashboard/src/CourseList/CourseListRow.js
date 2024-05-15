import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th  colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th style={headerRowStyle}>{textFirstCell}</th>
          <th style={headerRowStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td style={rowStyle}>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
