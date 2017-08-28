import React from 'react';
import { Header } from 'semantic-ui-react';

const AppHeader = (props) => (
  <div>
    <Header as={props.elemAs} floated={props.floated} className={props.className}>
      {props.headerContent}
    </Header>
  </div>
);
export default AppHeader;
