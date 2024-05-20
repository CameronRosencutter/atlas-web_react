import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/HL.ico';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    borderBottom: '7px solid rgb(255, 0, 0)',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    justifyContent: 'space-between',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  title: {
    float: 'right',
    marginLeft: '20px',
    fontSize: '50px',
    color: 'red',
    fontWeight: 'bold',
  },
  logoutSection: {
    marginLeft: '20px',
    cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
  },
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <div>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.title)}>School Dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <div className={css(styles.logoutSection)} id="logoutSection">
            Welcome {user.email} (<span onClick={logOut}>logout</span>)
          </div>
        )}
      </div>
    );
  }
}

export default Header;
