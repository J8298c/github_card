import React from 'react';
import { connect } from 'react-redux';
import GithubCard from './githubcard';
import Search from './search';
import consoleLogging from '../reducers/index';
import { bindActionCreators } from 'redux';
import {getQuery, fetchUserData} from '../actions/actions';


 class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            user: null
        }
        // this.onInputChange = this.onInputChange.bind(this);
        // this.fetchUserData = this.fetchUserData.bind(this);
    }
    getQuery(e){
      event.preventDefault()
      console.log('this', this.state)
    }

    // fetchUserData(e) {
    //     e.preventDefault();
    //     console.log('this.state', this.state);
    //     const BASE_URL = 'https://api.github.com/users/';
    //     const FETCH_URL = BASE_URL + this.state.query //refator using ES6 Temp strings
    //     console.log('The Fetch URL', FETCH_URL)
    //     fetch(FETCH_URL, {method: 'GET'}).then(response => response.json()).then(json => {
    //         const user = json;
    //         console.log('your requested user', user);
    //         this.setState({user});
    //     })
    // }
    //
    // onInputChange(event) {
    //     this.setState({query: event.target.value})
    // }
    //
    // onKeyPressChange(event) {
    //     //change enter to keycode from mdn link
    //     //
    //     if (event.which === 13) {
    //         this.fetchUserData()
    //     }
    // }
    render() {
        return (
            <div>
                <Search onChange={event=> this.setState({query: event.target.value})} runSearch={fetchUserData}/>
                <div>
                    <GithubCard user={this.state.user}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
  query: state,
  user: state
});
export default connect(mapStateToProps)(AppContainer);
