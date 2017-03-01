import React from 'react';

export default class ProfileSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.search = this.search.bind(this);
  }
  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.github.com/users/';
    const FETCH_URL = BASE_URL + this.state.query //refator using ES6 Temp strings
    console.log('The Fetch URL', FETCH_URL)
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => console.log('json', json))
  }
  onInputChange(event){
    console.log('event target of the input change is', event.target.value);
  }
  render(){
    return(
      <form>
        <input className="profile-search-input" value={this.state.query} type="text" onChange={event=>{this.setState({query: event.target.value})}}
          onKeyPress={event=>{
            if(event.key === "Enter"){
              this.search()
            }
          }}
        />
        <div className="profile-search-submit" onClick={()=>this.search()}>Submit</div>
      </form>
    )
  }
}
