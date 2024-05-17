import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginbox: {
    borderBottom: '7px solid red',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
  },
  infobox: {

  },
  form: {
    display: 'flex',
    '@media (max-width: 900px)': {
      // Styles for screens smaller than 900px
      flexDirection: 'column',
      padding: '20px',
    },
  },
  emailbox: {
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px',
  },
  passwordbox: {
    marginRight: '20px',
    marginBottom: '20px',
  },
});

function Login() {
  return (
    <div className={css(styles.loginbox)}>
      <div className={css(styles.infobox)}>
        <h1>Login to access the full dashboard</h1>
        <form className={css(styles.form)}>
          <div className={css(styles.emailbox)}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={css(styles.passwordbox)}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">OK</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
