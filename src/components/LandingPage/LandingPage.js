import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../AppHeader';
import ImageBanner from '../ImageBanner';
import programmer from '../../images/brogrammer.jpg';
import Button from '../Button';
import './landingpage.css';

const LandingPage = () => (
  <div>
    <AppHeader
      as='h1' headerContent='Github Cards' className='title'
    />
    <ImageBanner
      src={programmer} size='large' className='landingImage'
      containerName='landingImageContainer'
    />
    <Link to='/search'><Button
      className='landingpageButton' name='github alternate'
      content='Start'
    /></Link>
  </div>
);
export default LandingPage;
