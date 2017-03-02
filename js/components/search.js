import React from 'react';

export default function Search(props){
    return(
      <form>
        <input className="profile-search-input" value={props.username} type="text" onChange={props.queryValue}
          onKeyPress={props.enterKey} onSubmit
        />
        <button className="profile-search-submit" onClick={props.runSearch}>Submit</button>
      </form>
    )
}
