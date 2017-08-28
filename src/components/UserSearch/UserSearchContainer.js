import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchingUser } from '../../actions/index';
import Buttons from '../Button';
import Inputs from '../Inputs';
// import ImageBanner from '../ImageBanner';
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
    this.props.fetchingUser(query);
  }
  render() {
    return (
      <div>
        <Form>
          <Inputs
            placeholder='...Search User' onChange={event => { this.setState({ query: event.target.value }); }}
            className='searchInput'
          />
          <Buttons
            onClick={this.onFormSubmit} name='github' className='searchButton' content='Submit'
            linkTo='/profile'
          />
        </Form>
      </div>

    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'state in mapstate');
  return {
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchingUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AppSearchContainer);
