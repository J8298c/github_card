import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ImageBanner from '../ImageBanner';
import Buttons from '../Button';
import mockImage from '../../images/GithubLogo.svg';
import RepoCard from '../RepoCard';
import './userprofile.css';

class UserProfile extends Component {
  render() {
    const mockUser = {
      name: 'blah blah',
      location: 'bam whamo',
      bio: 'blacdka;lfkjd asdkkflls jksdfkla;kdf',
      image: mockImage,
      starredRepo: [
        {
          name: 'repo1',
        },
        {
          name: 'Repo2',
        },
        {
          name: 'Repo3',
        },
        {
          name: 'Repo4',
        },
      ],
    };
    console.log()
    const starRepoCards = mockUser.starredRepo.map((repo) => (
      <RepoCard
        repoName={repo.name}
        decription='ipsum loremiopsum lorem ipsum' cardDiv='cardDiv'
      />
    ));
    return (
      <div>
        <div className='imageDiv'>
          <img src={mockImage} />
          <h1>{mockUser.name}</h1>
        </div>
        <Buttons 
          color='purple' content='Gists' className='contentBtn' divClassName='buttonDiv' name='github alternate'
        />
        <Buttons 
          color='purple' content='Follow' className='contentBtn' divClassName='buttonDiv' name='user plus'
        />
        <Grid columns={2} className='repodiv'>
          {starRepoCards}
        </Grid>
      </div>
    );
  }
}
export default UserProfile;
