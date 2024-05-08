import React from 'react';

const NotificationItem = ({ type, value, html }) => {
  return (
    <li data-priority={type} className={`notification-${type}`}>
      {html ? <div dangerouslySetInnerHTML={html}></div> : value}
    </li>
  );
};

export default NotificationItem;
