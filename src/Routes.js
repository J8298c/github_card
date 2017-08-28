import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserSearchContainer from './components/UserSearch/UserSearchContainer';
import LandingPage from './components/LandingPage/LandingPage';
import UserProfile from './components/UserProfile/UserProfile';
import NavBar from './components/NavBar/NavBar';

const Routes = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={LandingPage} />
      <Route path='/search' component={UserSearchContainer} />
      <Route path='/profile' component={UserProfile} />
    </div>
  </Router>
);
export default Routes;
