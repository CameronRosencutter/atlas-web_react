// NotificationItem.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;

    return (
      <li data-testid="notification-item" onClick={this.handleClick} className={type === 'urgent' ? 'urgent' : ''}>
        {html ? <div dangerouslySetInnerHTML={html}></div> : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default NotificationItem;
