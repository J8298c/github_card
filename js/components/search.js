import React from 'react';

export default function Search(props){
    return(
        <form onSubmit={props.onSubmit}>
            <input className="profile-search-input" value={props.username} type="text" onChange={props.onChange}
                   onKeyPress={props.enterKey}
            />
            <button className="profile-search-submit" onClick={props.onSubmit}>Submit</button>
        </form>
    )
}