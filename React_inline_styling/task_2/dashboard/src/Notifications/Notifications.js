import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    padding: '30px',
    outline: 'rgb(255, 170, 170) solid 5px',
  },
  notificationDefault: {
    // Styles for default notifications
  },
  notificationUrgent: {
    color: 'red',
  },
  displayDrawer: {
    padding: '25px',
    width: '25%',
    outline: 'rgb(255, 180, 180) solid 3px',
    float: 'right',
  },
});

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
    const { displayDrawer } = this.props;

    return (
      <div className={displayDrawer ? css(styles.displayDrawer) : ''}>
        <div className={css(styles.notifications)}>
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
                className={notification.type === 'urgent' ? css(styles.notificationUrgent) : css(styles.notificationDefault)}
              />
            ))}
          </ul>
        </div>
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
