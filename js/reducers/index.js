import {FETCH_USERDATA, GET_QUERY, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_ERROR, ON_KEY_PRESS_CHANGE} from '../actions/actions';
import store from '../index';
const initialAppState = {query: "", user: null};


 const appReducer = (state = initialAppState, action) => {
     if (action.type === GET_QUERY) {
         (event) => {
             console.log('setting state with new query');
             this.setState({query: event.target.value})
         }
     }
     else if (action.type === FETCH_USERDATA) {
         console.log('running through FETCH_USERDATA');
         const BASE_URL = 'https://api.github.com/users/';
         const FETCH_URL = BASE_URL + 'j8298c'
         console.log('The Fetch URL', FETCH_URL);
         return fetch(FETCH_URL, {method: 'GET'})
             .then(response => response.json())
             .then(json => {
                 const user = json;
                 console.log('This is the returned user', user);
                 this.setState({user});
                 return Object.assign({}, initialAppState, {
                     query: action.value,
                     user
                 })
             });
         return state
     }
 };

export default appReducer


