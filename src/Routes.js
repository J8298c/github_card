import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserSearchContainer from './components/UserSearch/UserSearchContainer';
import UserProfile from './components/UserProfile/UserProfile';

const Routes = () => (
  <Router>
    <div>
      <Route path='/search' component={UserSearchContainer} />
      <Route path='/:user/profile' component={UserProfile} />
    </div>
  </Router>
);
export default Routes;
