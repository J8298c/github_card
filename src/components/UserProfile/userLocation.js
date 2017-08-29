import React from 'react';
import { List } from 'semantic-ui-react';

const UserLocations = (props) => (
  <List className={props.className}>
  	<List.Item>{props.bioLocation}</List.Item>
  	<List.Item>{props.bioUrl}</List.Item>
  	<List.Item>{props.bioBlog}</List.Item>
  </List>
);

export default UserLocations;
