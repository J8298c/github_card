import React from 'react';
import { Image } from 'semantic-ui-react';

const ImageBanner = (props) => (
  <div className='imageBannerDiv'>
    <Image 
      src={props.src} size={props.size} className='imagelogo'
    />
  </div>
 
);
export default ImageBanner;
