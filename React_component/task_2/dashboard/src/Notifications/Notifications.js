// Notifications.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem'; // Make sure to import NotificationItem
import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } }
      ]
    };
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    // Logic to mark the notification as read
  }

  render() {
    const { notifications } = this.state;

    return (
      <div className="notifications">
        <p>Here is the list of notices</p>
        <ul>
          {notifications.map(notification => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
