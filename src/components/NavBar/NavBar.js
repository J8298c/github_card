import React from 'react';
import githubLogo from '../../images/GithubLogo.svg';
import ImageBanner from '../ImageBanner';
import './navbar.css';

const NavBar = () => (
  <div>
    <ImageBanner 
      src={githubLogo} size='huge'
    />
  </div>
);
export default NavBar;
