import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/const';

const appState = {};

export default (state = appState, action) => {
  if (action.type === FETCH_USER_SUCCESS) {
    const { user } = action;
    const newState = Object.assign({}, state, { user });
    return newState;
  } 
  return state;
};

