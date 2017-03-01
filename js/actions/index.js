export const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS';

export function fetchUserDataSuccess(user) {
  return {
    type: FETCH_USERDATA_SUCCESS,
    user
  }
}
