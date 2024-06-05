// task_4/dashboard/src/HOC/WithLogging.test.js

import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  // Mock console.log
  const originalConsoleLog = console.log;
  let consoleOutput = [];
  const mockedConsoleLog = output => consoleOutput.push(output);
  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedConsoleLog;
  });
  afterEach(() => {
    console.log = originalConsoleLog;
  });

  it('logs mount and unmount messages with "Component" for pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <div>Hello World</div>);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleOutput).toEqual(['Component is mounted']);
    wrapper.unmount();
    expect(consoleOutput).toEqual(['Component is mounted', 'Component is going to unmount']);
  });

  it('logs mount and unmount messages with the component name for Login component', () => {
    const Login = () => <div>Login component</div>;
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleOutput).toEqual(['Login is mounted']);
    wrapper.unmount();
    expect(consoleOutput).toEqual(['Login is mounted', 'Login is going to unmount']);
  });
});
