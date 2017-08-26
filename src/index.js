import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const initAppState = {};
const store = createStore({}, initAppState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider>
    <Routes />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
