import React from 'react';
import {connect} from 'react-redux';


export class GithubCard extends React.Component {

    render() {
        let { user } = this.props;
        console.log(this.props);
        const userBlog = `https://${user.blog}`;
        const followersUrl = `https://github.com/${user.login}?tab=followers`;
        const followingUrl = `https://github.com/${user.login}?tab=following`;
        const reposUrl = `https://github.com/${user.login}?tab=repositories`;
        const gistUrl = `https://gist.github.com/${user.login}`;
        return ( 
            <div>
                <div className="imageContainer">
                <img src={user.avatar_url} className="userimg" />
                </div>
                <div className="profileContainer">
                <h2 className="username">{user.name}</h2>
                <h4 className="userlocation">{user.location}</h4>
                    <h4 className="userblog"><a href={userBlog} target="_blank">My Portfolio Site</a></h4>
                    <p className="userbio">{user.bio}</p>
                </div>
                <div className="userstats">
                    <p className="following"><a href={followersUrl}>Following:</a> <span className="followingCount">{user.followers}</span></p>
                    <p className="following"><a href={followingUrl}>Following:</a> <span className="followingCount">{user.following}</span></p>
                    <p className="following"><a href={reposUrl}>Repos:</a> <span className="reposCount">{user.public_repos}</span></p>
                    <p className="following"><a href={gistUrl}>Gists:</a> <span className="reposCount">{user.public_gists}</span></p>
                </div>
                <p className="homeLink"><a href='https://j8298c.github.io/github_card/'>Back to search</a></p>
            </div>          
        )
    }
}
export default connect()(GithubCard)
