import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    border: '1px solid black',
    padding: '8px',
  },
  td: {
    border: '1px solid black',
    padding: '8px',
  },
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.row;

  if (isHeader) {
    return (
      <tr className={css(rowStyle)}>
        {textSecondCell === null ? (
          <th className={css(styles.th)} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={css(rowStyle)}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
