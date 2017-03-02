import React from 'react';

export default function Search(props){
  console.log(props);
    return(
      <form onSubmit={props.runSearch}>
        <input className="profile-search-input" value={props.username} type="text" onChange={props.queryValue}
          onKeyPress={props.enterKey}
        />
        <button className="profile-search-submit" onClick={props.runSearch}>Submit</button>
      </form>
    )
}
