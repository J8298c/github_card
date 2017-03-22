import React from 'react';
import { connect } from 'react-redux';
import GithubCard from './githubcard';
import Search from './search';
import Header from './header';
import { bindActionCreators } from 'redux';
import { fetchingUser } from '../actions/actions';
import { store } from '../index';


export class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        store.getState();
        this.state = store.state;
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onKeyPressChange = this.onKeyPressChange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            query: event.target.value
        });
        console.log(this.state);
    }
    onFormSubmit(event) {
        event.preventDefault();
        console.log('logged on first attempt');
        this.props.fetchingUser(this.state.query);
        this.setState({query: ""});
        let searchForm = document.getElementById('search');
        searchForm.classList.add('hide');
        searchForm.classList.remove('search-form');
    }

    onKeyPressChange(event) {
        if (event.which === 13) {
            this.props.fetchingUser(this.state.query);
        }
    }

    render() {
        let user = this.props.user;
        let userComponent;
        let searchForm;
        if(user){
            userComponent = <GithubCard user={this.props.user}/>;
            searchForm = <div> </div>
         } else {
            userComponent = <div></div>
            searchForm = <Search onChange={this.onInputChange}  onSubmit={this.onFormSubmit} onKeyPress={this.onKeyPressChange} />
         }
        
        return (
            <div>
            <Header />
            <div>
                {searchForm}
                <div>
                {userComponent}
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    query: state.query,
    user: state.user
});
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchingUser}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
