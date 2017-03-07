import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appcontainer';
import appReducer from './reducers/index';
import {GET_QUERY, FETCH_USERDATA} from './actions/actions';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export const store = createStore(appReducer, applyMiddleware(thunk));

console.log('the state', store.getState())

store.dispatch({
  type:FETCH_USERDATA,
});
console.log('state after fetching action', store.getState())
// document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
//   <Provider store={store}>
//       <AppContainer />
//     </Provider>, document.getElementById('app')));
