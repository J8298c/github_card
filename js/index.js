import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/appcontainer';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// const store = createStore();
document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
    <AppContainer/>, document.getElementById('app')));
