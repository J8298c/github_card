import React from 'react';
import {connect} from 'react-redux';

export class GithubCard extends React.Component {
    render() {
        console.log('this.props', this.props);
        let user = {
            name: ''
        };
        if (this.props.user !== null) {
            user = this.props.user;
        }
        return (
            <div>
                <img src={user.avatar_url}/>
                <div>{user.name}</div>
                <div>{user.bio}</div>
                <div>{user.blog}</div>
                <div>{user.location}</div>
            </div>
        )
    }
}
export default connect()(GithubCard)
