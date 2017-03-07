import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appcontainer';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(appReducer);

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
    </Provider>, document.getElementById('app')));
