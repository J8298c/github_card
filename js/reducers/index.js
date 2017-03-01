/*
*/
import {FETCH_USERDATA} from "../constants";

// const user = (action) => {
//   return
// }

const users = (state = [], action)=>{
  let users = null;
  if(action.type === FETCH_USERDATA){
    users = [...state, user(action)]
  }
}
