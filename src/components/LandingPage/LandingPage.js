import React from 'react';
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
    <Button
      className='landingpageButton' name='github alternate'
      content='Start' linkTo='/search'
    />
  </div>
);
export default LandingPage;
