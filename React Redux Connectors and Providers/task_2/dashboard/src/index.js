import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import rootReducer from './reducers'; // Assuming your rootReducer is in the reducers folder
import App from './App/App';

// Create the Redux store and apply the thunk middleware
const store = createStore(
  rootReducer,
  fromJS({}),  // Initial state
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
