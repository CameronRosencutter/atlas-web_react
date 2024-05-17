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
    this.state = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
      ],
      isHovered: false,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    // Logic to mark the notification as read
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    const { notifications, isHovered } = this.state;

    return (
      <div>
        <div
          className={css(styles.menuItem)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Your notifications
        </div>
        {isHovered && (
          <div className={css(styles.displayDrawer)}>
            <div className={css(styles.notifications)}>
              <p>Here is the list of notices</p>
              <ul>
                {notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => this.markAsRead(notification.id)} // Correctly binding the markAsRead function
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
  displayDrawer: PropTypes.bool,
  setDisplayDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
