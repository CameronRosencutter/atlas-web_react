import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: '30px',
    right: '10px',
    zIndex: 1,
    display: 'none',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  notificationsVisible: {
    display: 'block',
  },
  menuItem: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '5px 10px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  },
});

class Notifications extends React.PureComponent {
  render() {
    const { displayDrawer, listNotifications, markNotificationAsRead, handleHideDrawer } = this.props;
    return (
      <div>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div className={css(styles.notifications, displayDrawer && styles.notificationsVisible)}>
          <button
            aria-label="Close"
            onClick={handleHideDrawer}
            style={{ float: 'right' }}
          >
            X
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map((notification) => (
              <li key={notification.id} onClick={() => markNotificationAsRead(notification.id)}>
                {notification.value || <span dangerouslySetInnerHTML={notification.html} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  markNotificationAsRead: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markNotificationAsRead: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
