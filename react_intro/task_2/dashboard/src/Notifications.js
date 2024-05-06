import React from 'react';
import { getLatestNotification } from './utils';

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
        x
      </button>
      <p>{getLatestNotification()}</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent" style={{ color: 'red' }}>New resume available</li>
        <li data-priority="urgent" style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
