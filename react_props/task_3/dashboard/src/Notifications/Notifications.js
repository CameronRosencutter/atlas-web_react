import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'; // Make sure to import NotificationItem
import './Notifications.css';

const Notifications = () => {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications">
      <button
        onClick={handleClick}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
        aria-label="Close"
      >
        
      </button>
      <p>Here is the list of notices</p>
      <ul>
        <NotificationItem type="urgent" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

export default Notifications;
