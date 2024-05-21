import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  footer: {
    textalign: 'center',
    fontsize: '25px',
    fontstyle: 'italic',
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
