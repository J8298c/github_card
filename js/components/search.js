import React from 'react';



export default function Search(props){
    return(
        <div>
        <form id="search" className="search-form" onSubmit={props.onSubmit}>
            <input className="searchinput" type="text" placeholder="Enter your profile name" value={props.username}  onChange={props.onChange}
                onKeyPress={props.enterKey} />
            <button className="submit" onClick={props.onSubmit}>Submit</button>
        </form>
        <div className="banner-image">
                <img src="https://github.com/J8298c/github_card/blob/master/images/git.svg" alt="github logo" />
            </div>
        </div>
    )
}