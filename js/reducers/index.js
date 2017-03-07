import {FETCH_USERDATA, GET_QUERY, ON_KEY_PRESS_CHANGE} from '../actions/actions';

const initialAppState = {query: "", user: null};


 const appReducer = (state = initialAppState, action) => {
  if(action.type === actions.FETCH_USERDATA){
    const BASE_URL = 'https://api.github.com/users';
    const FETCH_URL = BASE_URL + this.state.query
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
            })
  }
  // else if (action.type === GET_QUERY){
  //   (event)=> {
  //     this.setState({query: event.target.value})
  //   }
  // }
  return state
}
export default appReducer
