import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';

const styles = StyleSheet.create({
  body: {
    padding: '20px',
  },
  footer: {
    borderTop: '3px solid #E11D3F',
    padding: '10px',
    background: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  news: {
    height: '200px',
    padding: '30px',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  render() {
    const { displayDrawer, user } = this.state;
    const value = {
      user,
      logOut: this.logOut,
    };

    return (
      <AppContext.Provider value={value}>
        <div className="root-notifications"></div>
        <div className="App-header">
          <Header />
          {displayDrawer && <Notifications />}
        </div>
        <div className={`App-body ${css(styles.body)}`}>
          <main>
            <BodySectionWithMarginBottom>
              {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
            </BodySectionWithMarginBottom>
            <BodySection className="news">
              <h2>News from the School</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident possimus numquam autem.</p>
            </BodySection>
          </main>
        </div>
        <div className={`App-footer ${css(styles.footer)}`}>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;
