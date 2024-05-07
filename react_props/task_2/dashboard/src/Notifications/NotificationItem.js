import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  const className = `notification-${type}`;

  return (
    <li className={className} data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
      {value}
    </li>
  );
};

export default NotificationItem;
