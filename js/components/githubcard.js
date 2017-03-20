import React from 'react';
import {connect} from 'react-redux';
import {Media,Grid, Row, Col, Image} from 'react-bootstrap';

export class GithubCard extends React.Component {

    render() {
        let { user } = this.props;
        return (
            <div className="userProfile container">
                <Row>
                    <Col xs={10} md={4}>
                        <Image src={user.avatar_url} className="center-block userimage" thumbnail />
                    </Col>
                    <Row className="userInfo">
                        <Col xs={12} md={6}>
                            <p className="username">{user.name}</p>
                        </Col>
                        <Row>
                            <Col xs={12} md={6}>
                                <p className="userlocation">{user.location}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="userblog"><a href={user.blog}>My Portfolio</a></p>
                            </Col>
                            <Col xs={9} md={6}>
                                <p className="userbio">{user.bio}</p>
                            </Col>
                            <Row>
                                <Col xs={6} md={3}>
                                    <div>
                                        <p className="userfollowing">Following:
                                        <a href={user.following_url}>{user.following}</a></p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div>
                                        <p className="userfollowers"> Followers:
                                        <a href={user.follower_url}>{user.followers}</a></p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div>
                                        <p className="userrepo">User Repos
                                        <a href={user.repos_url}>{user.public_repos}</a></p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div>
                                        <p className="usergist">User Gists
                                        <a href={user.gists_url}>{user.public_gists}</a></p>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </Row>
                </Row>
            </div>
        )
    }
}
export default connect()(GithubCard)