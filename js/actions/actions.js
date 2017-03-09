export const FETCH_USER = "FETCH_USER";
export function fetchUser(response){
    return {
        type: FETCH_USER,
        response
    }
}

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export function fetchUserSuccess(returnedUser){
    return {
        type: FETCH_USER_SUCCESS,
        payload: returnedUser
    }
}

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export function fetchUserError(payload){
    return {
        type: FETCH_USER_ERROR,
        payload
    }
}

export const fetchingUser = (query) => {
    return (dispatch) => {
        const BASE_URL = `https://api.github.com/users/${query}`;
        // const FETCH_URL = BASE_URL + this.state.query;
        console.log(BASE_URL);
        fetch(BASE_URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                const user = json;
                console.log('Hi im the returned user', user);
                if(user !== undefined){
                    console.log(true);
                    dispatch(fetchUserSuccess(user));
                } else {
                    console.log(false)
                    dispatch(fetchUserError(response.status))
                }
            })
    }
};
