import React from 'react';

export default function GithubCard(props){
  return(
    <div>
      <img src={props.userAvatar} />
      <h2>{props.userName}</h2>
      <p>{props.userLogin}</p>
    </div>
  )
}
