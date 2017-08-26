import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Buttons from '../Button';
import Inputs from '../Inputs';
import ImageBanner from '../ImageBanner';
import githubLogo from '../../images/GithubLogo.svg';
import './usersearch.css';

class AppSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    console.log(query);
  }
  render() {
    return (
      <div>
        <ImageBanner
          src={githubLogo} size='huge'
        />
        <Form>
          <Inputs 
            placeholder='...Search User' onChange={event => { this.setState({ query: event.target.value }); }}
            className='searchInput'
          />
          <Buttons
            onClick={this.onFormSubmit} name='github' className='searchButton' content='Submit'
          />
        </Form>
      </div>
      
    );
  }
}
export default AppSearchContainer;
