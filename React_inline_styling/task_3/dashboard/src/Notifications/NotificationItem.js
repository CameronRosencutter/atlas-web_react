import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  return (
    <li
      className={css(type === 'urgent' ? styles.urgent : styles.default)}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
      {...(html ? { dangerouslySetInnerHTML: html } : { children: value })}
    >
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
