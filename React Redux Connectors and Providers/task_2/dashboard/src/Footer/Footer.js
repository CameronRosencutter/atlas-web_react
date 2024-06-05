import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontSize: '25px',
    fontStyle: 'italic',
  },
  link: {
    marginLeft: '10px',
  },
});

const Footer = ({ user }) => (
  <div className={css(styles.footer)}>
    <p>&copy; 2020 Holberton School</p>
    {user && user.isLoggedIn && (
      <p className={css(styles.link)}>
        <a href="/contact">Contact us</a>
      </p>
    )}
  </div>
);

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
  }),
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user') ? state.get('user').toJS() : null, // Safely accessing state.get('user')
});

export default connect(mapStateToProps)(Footer);
