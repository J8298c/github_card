import React from 'react';
import ReactDOM from 'react-dom';
import ProfileSearch from './components/profilesearch';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// const store = createStore();
document.addEventListener('DOMContentLoaded', ()=>
    ReactDOM.render(
      <ProfileSearch />
, document.getElementById('app'))
);
