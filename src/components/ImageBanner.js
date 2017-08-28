import React from 'react';
import { Image } from 'semantic-ui-react';

const ImageBanner = (props) => (
  <div className={props.containerName}>
    <Image
      src={props.src} size={props.size} className={props.className}
    />
  </div>

);
export default ImageBanner;
