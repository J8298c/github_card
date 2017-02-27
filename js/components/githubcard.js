import React from 'react';

export default function GithubCard(props){
    return (
        <div>
            <img src={props.img} className="profile-image" />
                <h2 className="profile-name">{props.username}</h2>
                <a href={props.userEmail} className="profile-email">{props.userEmail}</a>
            </div>
    )
}