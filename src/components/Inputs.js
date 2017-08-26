import React from 'react';
import { Input } from 'semantic-ui-react';

const Inputs = (props) => (
  <Input
    placeholder={props.placeholder} onChange={props.onChange} className={props.className}
  />
);
export default Inputs;
