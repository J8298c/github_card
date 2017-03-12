import React from 'react';
import { connect } from 'react-redux';
import GithubCard from './githubcard';
import Search from './search';
import { bindActionCreators } from 'redux';
import { fetchingUser } from '../actions/actions';
import { store } from '../index';


export class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.state;
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onKeyPressChange = this.onKeyPressChange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            query: event.target.value
        });
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchingUser(this.state.query);
        this.setState({query: ""});
        let searchForm = document.getElementById('search');
        searchForm.classList.add('hide');
        searchForm.classList.remove('search-form');
        document.getElementById('pro-container').classList.remove('hide');
    }

    onKeyPressChange(event) {
        if (event.which === 13) {
            this.props.fetchingUser(this.state.query);
        }
    }

    render() {

        return (
            <div>
                <Search onChange={this.onInputChange} onSubmit={this.onFormSubmit} onKeyPress={this.onKeyPressChange} />
                <div>
                    <GithubCard user={this.props.user}/>
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
