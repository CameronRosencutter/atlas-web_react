import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  footer: {
    borderTop: '7px solid rgb(255, 0, 0)',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    justifyContent: 'center',
  },
  link: {
    marginLeft: '10px',
  },
});

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className={css(styles.footer)}>
      <p>&copy; 2020 Holberton School</p>
      {user.isLoggedIn && (
        <p className={css(styles.link)}>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;
