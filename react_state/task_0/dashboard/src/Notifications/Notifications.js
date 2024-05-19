import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

// Animation keyframes for opacity change
const opacityChange = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

// Animation keyframes for bounce effect
const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  notifications: {
    padding: '30px',
    outline: 'rgb(255, 170, 170) solid 5px',
    background: 'white',
    position: 'absolute',
    top: '30px',
    right: '0px',
    zIndex: 1000,
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      fontSize: '20px',
      background: 'white',
    },
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
    position: 'absolute',
    top: '30px',
    right: '0px',
    zIndex: 1000,
    '@media (max-width: 900px)': {
      width: '100%',
      background: 'white',
    },
  },
  menuItem: {
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    padding: '10px',
    position: 'fixed', // Fixed position to stay at the top right
    top: '10px',
    right: '10px',
    zIndex: 1001, // Ensure the menu item is above other elements
    ':hover': {
      animationName: [opacityChange, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  hidden: {
    display: 'none',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    // Logic to mark the notification as read
  }

  render() {
    const { listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer} // Ensure this calls handleDisplayDrawer
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.displayDrawer)}>
            <div className={css(styles.notifications)}>
              <button onClick={handleHideDrawer}>Close</button>
              <p>Here is the list of notices</p>
              <ul>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => this.markAsRead(notification.id)}
                    className={notification.type === 'urgent' ? css(styles.notificationUrgent) : css(styles.notificationDefault)}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
  })),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func.isRequired, // Ensure handleDisplayDrawer is required
  handleHideDrawer: PropTypes.func.isRequired, // Ensure handleHideDrawer is required
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {}, // Default to empty function
  handleHideDrawer: () => {}, // Default to empty function
};

export default Notifications;
