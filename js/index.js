import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appcontainer';
import appReducer from './reducers/index';
import {FETCH_USER, fetchingUser} from './actions/actions';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export const store = createStore(appReducer, applyMiddleware(thunk));

store.dispatch(
  fetchingUser()
);

// document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
//   <Provider store={store}>
//       <AppContainer />
//     </Provider>, document.getElementById('app')));
