import React from 'react';
import {connect} from 'react-redux';


export class GithubCard extends React.Component {

    render() {
        console.log('this.props', this.props);
        console.log('the user', user);
        let { user } = this.props;
        return (
            <div id="pro-container" className="profile-container">
                <div className="user-bio-container">
                <img src={user.avatar_url} />
                <div className="user-name">{user.name}</div>
                <div className="user-location">{user.location}</div>
                <div className="user-blog"><a href={user.blog}>My Portfolio Site</a></div>
                <div className="user-bio">{user.bio}</div>
                <div className="following">Following: <a href={user.following_url}>{user.following}</a></div>
                <div className="followers">Followers: <a href={user.follower_url}>{user.followers}</a></div>
                </div>
                <div className="repo-gist-container">
                <div className="user-repos">
                <h5>User Repos</h5>
                <a className="user-repo-count" href={user.repos_url}>{user.public_repos}</a>
                </div>
                <div className="user-gist">
                <h5>User Gists</h5>
                <a className="user-gist-count" href={user.gists_url}>{user.public_gists}</a>
                </div>
                </div>
            </div>
        )
    }
}
export default connect()(GithubCard)
//use __mock__ and setup a user json with all elements needed in gihubcard 
