import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppHeader from '../AppHeader';
import ImageBanner from '../ImageBanner';
import Buttons from '../Button';
import UserLocations from './userLocation';
// import RepoCard from '../RepoCard';
import './userprofile.css';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    console.log(user, 'user out of props');
    let userHeader;
    if (user) {
      userHeader = (
        <div>
          <ImageBanner src={user.avatar_url} size='small' className='userimage' />
          <AppHeader as='h1' className='username' headerContent={user.name} />
          <AppHeader as='h6' className='username' headerContent={user.bio} />
          <UserLocations 
            className='userbio' bioLocation={user.location} bioUrl={user.url} bioBlog={user.blog}
          />
        </div>
      );
    } else {
      userHeader = '...Loading';
    }
    return (
      <div>
        {userHeader}
        <Buttons
          color='purple' content='Gists' className='contentBtn' divClassName='buttonDiv' name='github alternate'
        />
        <Buttons
          color='purple' content='Follow' className='contentBtn' divClassName='buttonDiv' name='user plus'
        />
        <Grid columns={2} className='repodiv'>
          <div>1</div>
          <div>2</div>
        </Grid>
        <Link to='/search'><Buttons 
          color='purple' content='Back to search' className='contentBtn' divClassName='buttonDiv' name='arrow left'
        /></Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'state');
  const { user } = state;
  console.log(user, 'user');
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(UserProfile);
