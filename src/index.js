import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import Routes from './Routes';
import userReducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const initAppState = {};
const store = createStore(userReducers, initAppState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
