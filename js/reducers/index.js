/*
should run my function here and make sure  to name them all according to what theyre doing to make it easier to understand whats doing what
*/
import {FETCH_USERDATA} from "../constants";


//change search to fetchUserData
search(){
  console.log('this.state', this.state);
  const BASE_URL = 'https://api.github.com/users/';
  const FETCH_URL = BASE_URL + this.state.query //refator using ES6 Temp strings
  console.log('The Fetch URL', FETCH_URL)
  fetch(FETCH_URL, {
    method: 'GET'
  })
