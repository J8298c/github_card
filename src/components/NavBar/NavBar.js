import React from 'react';
import githubLogo from '../../images/GithubLogo.svg';
import ImageBanner from '../ImageBanner';
import './navbar.css';

const NavBar = () => (
  <div>
    <ImageBanner
      src={githubLogo} size='huge' className='imagelogo' containerName='imageBannerDiv'
    />
  </div>
);
export default NavBar;
