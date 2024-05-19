import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/HL.ico';

const styles = StyleSheet.create({
  header: {
    borderBottom: '7px solid rgb(255, 0, 0)',
    display: 'flex',
    alignItems: 'center',
    padding: '20px'
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  title: {
    marginLeft: '20px',
    fontSize: '50px',
    color: 'red',
    fontWeight: 'bold',
  },
});

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School Dashboard</h1>
    </div>
  );
};

export default Header;
