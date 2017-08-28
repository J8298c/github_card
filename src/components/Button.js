import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Buttons = (props) => (
  <div className={props.divClassName}>
    <Link to={props.linkTo}>
      <Button
        color={props.color} onClick={props.onClick} className={props.className}
      >
        <Icon name={props.name} />
        {props.content}
      </Button>
    </Link>
  </div>
);

export default Buttons;
