
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCard from './components/githubcard';
import AppContainer from './components/appcontainer';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';


const initialAppState = {
    query: "",
    user: null
};
export const store = createStore(appReducer, initialAppState, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
    	<Route path='/' component={AppContainer} >
    		<Route path='/:username' component={GithubCard} />
    	</Route>
    </Router>
    </Provider>, document.getElementById('app')));
