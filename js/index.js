import React from 'react';
import ReactDOM from 'react-dom';
import GithubCardList from './components/githubcardlist';

document.addEventListener('DOMContentLoaded', ()=>
    ReactDOM.render(<GithubCardList />, document.getElementById('app'))
);