import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import courses from '../CourseList/coursesData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    return (
      <div className="App">
        <Notifications displayDrawer={displayDrawer} />
        <Header />
        {isLoggedIn ? <CourseList listCourses={courses} /> : <Login />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: true,
};

export default App;
