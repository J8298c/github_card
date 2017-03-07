export const FETCH_USERDATA = "FETCH_USERDATA";
export const GET_QUERY = "GET_QUERY";
export const ON_KEY_PRESS_CHANGE = "ON_KEY_PRESS_CHANGE";
export const FETCH_USERDATA_SUCCESS = "FETCH_USERDATA_SUCCESS";
export const FETCH_USERDATA_ERROR = "FETCH_USERDATA_ERROR";


export function fetchUserData(user){
   return {
    type: FETCH_USERDATA,
    user
    }
}

export function fetchUserDataSuccess(user){
  return {
    type: FETCH_USERDATA_SUCCESS,
    user
  }
}

export function fetchUserDataError(error){
  return {
    type: FETCH_USERDATA_ERROR,
    error
  }
}

export function getQuery(query){
    return {
    type: GET_QUERY,
    query
  }
}
