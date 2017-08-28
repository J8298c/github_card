import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
// import ImageBanner from '../ImageBanner';
import Buttons from '../Button';
import mockImage from '../../images/GithubLogo.svg';
// import RepoCard from '../RepoCard';
import './userprofile.css';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className='imageDiv'>
          <img src={mockImage} />
          <h1>Julio</h1>
        </div>
        <Buttons
          color='purple' content='Gists' className='contentBtn' divClassName='buttonDiv' name='github alternate'
        />
        <Buttons
          color='purple' content='Follow' className='contentBtn' divClassName='buttonDiv' name='user plus'
        />
        <Grid columns={2} className='repodiv'>
          1
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'state');
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(UserProfile);
