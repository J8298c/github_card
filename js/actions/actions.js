export const FETCH_USERDATA = "FETCH_USERDATA";
export const GET_QUERY = "GET_QUERY";
export const ON_KEY_PRESS_CHANGE = "ON_KEY_PRESS_CHANGE";


export function fetchUserData(user){
   const action = {
    type: FETCH_USERDATA,
    user
  }
  return action
}

export function getQuery(query){
  const action = {
    type: ON_INPUT_CHANGE,
    query
  }
  return action
}
