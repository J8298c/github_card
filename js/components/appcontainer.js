import React from 'react';
import { connect } from 'react-redux';
import GithubCard from './githubcard';
import Search from './search';
import { bindActionCreators } from 'redux';
import { fetchingUser } from '../actions/actions';


export class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            user: null
        };
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
        this.props.fetchingUser(this.state.query)
        this.setState({query: ""});
    }

    onKeyPressChange(event) {
        if (event.which === 13) {
            fetchingUser
        }
    }


    render() {
        return (
            <div>
                <Search onChange={this.onInputChange} onSubmit={this.onFormSubmit} onKeyPress={this.onKeyPressChange} />
                <div>
                    <GithubCard user={this.state.user}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    query: this.state,
    user: this.state
});
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchingUser}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
