import React from 'react';
import {connect} from 'react-redux';


export class GithubCard extends React.Component {

    render() {
        let { user } = this.props;
        console.log(this.props);
        const followersUrl = `https://github.com/${user.name}?tab=followers`;
        const followingUrl = `https://github.com/${user.name}?tab=following`;
        const reposUrl = `https://github.com/${user.login}?tab=repositories`;
        return ( 
            <div>
                <div className="imageContainer">
                <img src={user.avatar_url} className="userimg" />
                </div>
                <div className="profileContainer">
                <h2 className="username">{user.name}</h2>
                <h4 className="userlocation">{user.location}</h4>
                    <h4 className="userblog"><a href={user.blog} target="_blank">My Portfolio Site</a></h4>
                    <p className="userbio">{user.bio}</p>
                </div>
                <div className="userstats">
                    <p className="following"><a href={followersUrl}>Following:</a> <span className="followingCount">{user.followers}</span></p>
                    <p className="following"><a href={followingUrl}>Following:</a> <span className="followingCount">{user.following}</span></p>
                    <p className="following"><a href={reposUrl}>Repos:</a> <span className="reposCount">{user.public_repos}</span></p>
                </div>
                <p className="homeLink"><a href='https://j8298c.github.io/github_card/#/'>Back to search</a></p>
            </div>          
        )
    }
}
export default connect()(GithubCard)

 // <div className="userProfile container">
 //                <Row>
 //                    <Col xs={10} md={4}>
 //                        <Image src={user.avatar_url} className="center-block userimage" thumbnail />
 //                    </Col>
 //                    <Row className="userInfo">
 //                        <Col xs={12} md={6}>
 //                            <p className="username">{user.name}</p>
 //                        </Col>
 //                        <Row>
 //                            <Col xs={12} md={6}>
 //                                <p className="userlocation">{user.location}</p>
 //                            </Col>
 //                            <Col xs={12} md={6}>
 //                                <p className="userblog"><a href={user.blog}>My Portfolio</a></p>
 //                            </Col>
 //                            <Col xs={9} md={6}>
 //                                <p className="userbio">{user.bio}</p>
 //                            </Col>
 //                            <Row>
 //                                <Col xs={6} md={3}>
 //                                    <div>
 //                                        <p className="userfollowing">Following:
 //                                        <a href={user.following_url}>{user.following}</a></p>
 //                                    </div>
 //                                </Col>
 //                                <Col xs={6} md={3}>
 //                                    <div>
 //                                        <p className="userfollowers"> Followers:
 //                                        <a href={user.follower_url}>{user.followers}</a></p>
 //                                    </div>
 //                                </Col>
 //                                <Col xs={6} md={3}>
 //                                    <div>
 //                                        <p className="userrepo">User Repos
 //                                        <a href={user.repos_url}>{user.public_repos}</a></p>
 //                                    </div>
 //                                </Col>
 //                                <Col xs={6} md={3}>
 //                                    <div>
 //                                        <p className="usergist">User Gists
 //                                        <a href={user.gists_url}>{user.public_gists}</a></p>
 //                                    </div>
 //                                </Col>
 //                            </Row>
 //                        </Row>
 //                    </Row>
 //                </Row>
 //            </div>