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

const styles = StyleSheet.create({
  body: {
    padding: '20px',
  },
  footer: {
    borderTop: '3px solid #E11D3F',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
});

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'Default Notification',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'Urgent Notification',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: '<b>Html</b> notification' },
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      displayDrawer: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
      this.setState({ isLoggedIn: false });
    } else if (event.ctrlKey && event.key === 'l') {
      this.setState({ isLoggedIn: true, displayDrawer: true });
    }
  }

  toggleDrawer() {
    this.setState(prevState => ({ displayDrawer: !prevState.displayDrawer }));
  }

  render() {
    return (
      <>
        <div className="root-notifications"></div>
        <div className="App-header">
          <Header />
          {this.state.displayDrawer && <Notifications listNotifications={listNotifications} />}
        </div>
        <div className={`App-body ${css(styles.body)}`}>
          <main>
            <BodySectionWithMarginBottom>
              {this.state.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
            </BodySectionWithMarginBottom>
            <BodySection>
              <h2>News from the School</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident possimus numquam autem.</p>
            </BodySection>
          </main>
        </div>
        <div className={`App-footer ${css(styles.footer)}`}>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}, // Empty function as default
};

export default App;
