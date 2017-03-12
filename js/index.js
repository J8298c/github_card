
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appcontainer';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialAppState = {
    query: "",
    user: null
};
export const store = createStore(appReducer, initialAppState, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('app')));
