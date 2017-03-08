const BASE_URL = 'https://api.github.com/users/';
const FETCH_URL = BASE_URL + 'j8298c';

export const FETCH_USER = "FETCH_USER";
export function fetchUser(response){
  return {
    type: FETCH_USER,
    response
  }
}
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export function fetchUserSuccess(payload){
  return {
    type: FETCH_USER_SUCCESS,
    payload
  }
}

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export function fetchUserError(payload){
  return {
    type: FETCH_USER_ERROR,
    payload
  }
}

export const fetchingUser = () => {
  return (dispatch) => {
    fetch(FETCH_URL, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        const user = json;
        console.log('returned user', user);
        if(user !== undefined){
          dispatch(fetchUserSuccess(user));
        } else {
          dispatch(fetchUserError(response.status))
        }
      })
  }
}