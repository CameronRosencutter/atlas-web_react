import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uiReducer from './reducers/uiReducer'; // Adjust the import path according to your project structure
import App from './App/App';

// Create the Redux store
const store = createStore(uiReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
