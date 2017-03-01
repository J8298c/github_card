import {FETCH_USERDATA} from '../constants';

export const fetchUserdata = (data)=> {
  const action = {
    type: FETCH_USERDATA,
    data
  }
  console.log('action fetchUserdata', action);
  return action;
}
