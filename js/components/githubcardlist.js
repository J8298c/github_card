import React from 'react';
import GithubCard from './githubcard';

export default function GithubCardList(){
    const image = "http://placehold.it/350x150";
    const username = "Julio Mojica"
    const useremail = "juliocmojica@gmail.com";
    return (
        <div>
            <GithubCard img={image} username={username}
                userEmail={useremail} />
            </div>
    )
}