import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './const';

export function fetchUserSuccess(user) {
  const action = {
    type: FETCH_USER_SUCCESS,
    user,
  };
  return action;
}

export function fetchUserError(bool) {
  const action = {
    type: FETCH_USER_ERROR,
    bool: false,
  };
  return action;
} 

/*
  fetch user from api request username is supplied
  VIA the query parameter
*/

export function fetchingUser(query) {
  return (dispatch) => {
    const url = `https://api.github.com/users/${query}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUserSuccess(json));
      }).catch(fetchUserError(true));
  };
}
