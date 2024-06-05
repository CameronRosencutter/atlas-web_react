import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
}) || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
