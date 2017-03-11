
export const FETCH_USER = "FETCH_USER";
export function fetchUser(response){
    return {
        type: FETCH_USER,
        response
    }
}

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export function fetchUserSuccess(response){
    return {
        type: FETCH_USER_SUCCESS,
       response
    }
}

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export function fetchUserError(response){
    return {
        type: FETCH_USER_ERROR,
        response
    }
}

export const fetchingUser = (query) => {
    return (dispatch) => {
        dispatch(fetchUser(query));
        const BASE_URL = `https://api.github.com/users/${query}`
        fetch(BASE_URL, {method: 'GET'})
            .then((response)=> {
              // try to move if statement out side this block to see
              //if that fixes the fetch avatar_url not found even though it loads
                if(!response.ok){
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then(json => {
                setTimeout(()=> {
                    dispatch(fetchUserSuccess(json))
                }, 1000)
            }).catch(() => dispatch(fetchUserError()))
    }
};
