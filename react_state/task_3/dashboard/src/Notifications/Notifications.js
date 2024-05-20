import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                markAsRead={markNotificationAsRead}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

export default Notifications;
