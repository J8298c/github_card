import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Buttons = (props) => (
  <div className={props.divClassName}>
    <Button 
      color={props.color} onClick={props.onClick} className={props.className}
    >
      <Icon name={props.name} />
      {props.content}
    </Button>
  </div>
);

export default Buttons;
