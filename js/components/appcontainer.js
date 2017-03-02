import React from 'react';
import GithubCard from './githubcard';
import Search from './search';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            user: null
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.search = this.search.bind(this);
    }

    search(e) {
        e.preventDefault();
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.github.com/users/';
        const FETCH_URL = BASE_URL + this.state.query //refator using ES6 Temp strings
        console.log('The Fetch URL', FETCH_URL)
        fetch(FETCH_URL, {method: 'GET'}).then(response => response.json()).then(json => {
            const user = json;
            console.log('your requested user', user);
            this.setState({user});
        })
    }

    onInputChange(event) {
        this.setState({query: event.target.value})
    }

    onKeyPressChange(event) {
        //change enter to keycode from mdn link
        //
        if (event.which === 13) {
            this.search()
        }
    }
    render() {
        return (
            <div>
                <Search queryValue={this.onInputChange} enterKey={this.onKeyPressChange} runSearch={this.search}/>
                <div>
                    <GithubCard user={this.state.user}/>
                </div>
            </div>
        )
    }
}
