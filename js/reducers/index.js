import {FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR, fetchingUser} from '../actions/actions';
import { store } from '../index';
import { combineReducers } from 'redux';

const appReducer = (state = store.state , action) => {
    if(action.type === FETCH_USER){
        return (dispatch) => {
            store.dispatch(fetchingUser)
        }
    }
    else if(action.type === FETCH_USER_SUCCESS){
        let returnedUser = action.response;
         const newState = Object.assign({}, state, {
            user: returnedUser
        });
        return newState;
    }
    else if(action.type === FETCH_USER_ERROR){
        return action.response
    }
    return state
};

export default appReducer;
