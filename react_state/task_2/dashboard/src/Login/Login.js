import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginbox: {
    borderBottom: '7px solid red',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
  },
  infobox: {},
  form: {
    display: 'flex',
    '@media (max-width: 900px)': {
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
  submitButton: {
    marginTop: '20px',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.toggleSubmitButton);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.toggleSubmitButton);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  toggleSubmitButton() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.loginbox)}>
        <div className={css(styles.infobox)}>
          <h1>Login to access the full dashboard</h1>
          <form onSubmit={this.handleLoginSubmit} className={css(styles.form)}>
            <div className={css(styles.emailbox)}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className={css(styles.passwordbox)}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChangePassword}
              />
            </div>
            <input
              type="submit"
              value="OK"
              className={css(styles.submitButton)}
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
