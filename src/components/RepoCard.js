import React from 'react';
import { Card } from 'semantic-ui-react';

const RepoCard = (props) => (
  <div className={props.cardDiv}>
    <Card>
      <Card.Content header={props.repoName} />
      <Card.Content description={props.repoDiscription} />
    </Card>
  </div>
);
export default RepoCard;
