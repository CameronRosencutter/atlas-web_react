import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

const Notifications = ({ displayDrawer = false }) => {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className='displayDrawer'>
      {displayDrawer && (
        <div className="menuItem">
          Your notifications
        </div>
      )}
      <div className="Notifications">
        <button
          onClick={handleClick}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
          aria-label="Close"
        >
          X
        </button>
        <p>Here is the list of notices</p>
        <ul>
          <NotificationItem type="urgent" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
