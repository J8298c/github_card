import {FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../actions/actions';
import { store } from '../index';

const appReducer = (state = {user: null}, action) => {
    if(action.type === FETCH_USER){
        return state;
    }
    else if(action.type === FETCH_USER_SUCCESS){
        let returnedUser = action.payload;
        console.log(returnedUser);
        console.log('calling state from succes action', state);
        console.log('the store state', store.getState());
         const userReturned =  Object.assign({}, state, {
            user: returnedUser
        })
        console.log('the returned user', userReturned);
        console.log('state after the user is assigned to state', state);
        return userReturned;
    }
    else if(action.type === FETCH_USER_ERROR){
        console.log('actiopn on errror', action.payload.message);
        return action.payload
    }
    return state
};

export default appReducer
