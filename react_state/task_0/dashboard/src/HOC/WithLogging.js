// task_4/dashboard/src/HOC/WithLogging.js

import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
};

export default WithLogging;
