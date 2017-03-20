import React from 'react';
import {connect} from 'react-redux';
import {Media,Grid, Row, Col, Image} from 'react-bootstrap';

export class GithubCard extends React.Component {

    render() {
        let { user } = this.props;
        return (
            <div className="container">
                <Media.Left align="middle">
                    <Row>
                      <Col xs={12} md={12} lg={12}>
                        <Image width={300} height={300} src={user.avatar_url} className="user-image" thumbnail />
                      </Col>
                    </Row>
                </Media.Left>
                    <Row>
                      <Col md={12} lg={12}>
                        <h3 className="username">{user.name}</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={5} lg={5}>
                        <p className="userlocation">{user.location}</p>
                      </Col>
                      <Col md={5} lg={5}>
                      <p className="userblog"><a href={user.blog}>My Portfolio</a></p>
                      </Col>
                      <Col md={5} lg={5}>
                      <p className="userbio">{user.bio}</p>
                      </Col>
                    </Row> 
                    <Row>
                    <Col sm={6} md={6} className="following">
                        <p>Following: <a href={user.following_url}>{user.following}</a></p>
                    </Col>
                    <Col sm={6} md={6} className="followers">
                       <p> Followers: <a href={user.follower_url}>{user.followers}</a></p>
                    </Col>
                    </Row> 
                    <Row>
                        <Col sm={6} md={6} className="userrepo">
                        <h5>User Repos</h5>
                        <a href={user.repos_url}>{user.public_repos}</a>
                    </Col>
                    <Col sm={6} md={6} className="usergist" >
                        <h5>User Gists</h5>
                       <a href={user.gists_url}>{user.public_gists}</a>
                    </Col>
                    </Row>           
            </div>
        )
    }
}
export default connect()(GithubCard)
//use __mock__ and setup a user json with all elements needed in gihubcard 
// <div id="pro-container" className="profile-container">
//                 <div className="user-bio-container">
//                 <Col xs={12} md={12} lg={12}>
//                 <Image src={user.avatar_url} className="center-block" responsive/>
//                 </Col>
//                 <Col xs={12} md={12} lg={12}>
//                 <div className="user-name">{user.name}</div>
//                 </Col>
//                 <div className="user-location">{user.location}</div>
//                 <div className="user-blog"><a href={user.blog}>My Portfolio Site</a></div>
//                 <div className="user-bio">{user.bio}</div>
//                 <div className="following">Following: <a href={user.following_url}>{user.following}</a></div>
//                 <div className="followers">Followers: <a href={user.follower_url}>{user.followers}</a></div>
//                 </div>
//                 <div className="repo-gist-container">
//                 <div className="user-repos">
//                 <h5>User Repos</h5>
//                 <a className="user-repo-count" href={user.repos_url}>{user.public_repos}</a>
//                 </div>
//                 <div className="user-gist">
//                 <h5>User Gists</h5>
//                 <a className="user-gist-count" href={user.gists_url}>{user.public_gists}</a>
//                 </div>
//                 </div>
//             </div>