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
  notificationWrapper: {
    position: 'relative',
  },
  notifications: {
    position: 'absolute',
    top: '30px',
    right: '10px',
    zIndex: 1,
  },
});

const listCourses = [
  {
    id: 1,
    name: "ES6",
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    credit: 40,
  },
];

const defaultListNotifications = [
  {
    id: 1,
    type: "default",
    value: "Default Notification",
  },
  {
    id: 2,
    type: "urgent",
    value: "Urgent Notification",
  },
  {
    id: 3,
    type: "urgent",
    html: { __html: "<b>Html</b> notification" },
  },
];

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
      listNotifications: defaultListNotifications,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  render() {
    const { displayDrawer, user, listNotifications } = this.state;
    const value = {
      user,
      logOut: this.logOut,
    };

    return (
      <AppContext.Provider value={value}>
        <div className="root-notifications"></div>
        <div className="App-header">
          <Header />
        </div>
        <div className={`App-body ${css(styles.body)}`}>
          <div className={css(styles.notificationWrapper)}
               onMouseEnter={this.handleDisplayDrawer}
               onMouseLeave={this.handleHideDrawer}>
            <Notifications
              displayDrawer={displayDrawer}
              listNotifications={listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}
              handleHideDrawer={this.handleHideDrawer}
            />
          </div>
          <main>
            <BodySectionWithMarginBottom>
              {user.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login logIn={this.logIn} />}
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
