import React, { Component } from 'react';
import Search from './Search';
import Gif from './models/gif'
import Results from './Results'


class SearchContainer extends Component {
constructor (props) {
  super()
  this.state = {
    query: '',
    searched: false,
    result: [],
  }
}

handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    Gif.all(this.state.query).then(res=>{
      console.log(res)
      this.setState({result: res.data.data})
    });
  }

  render(){
    return(
      <div>
      <Search
          handleSubmit={(event) => this.handleSubmit(event)}
          handleChange={(event) => this.handleChange(event)}
          query={this.state.query}
        />
        <Results gif={this.state.result} />
      </div>
    )
  }
}

export default SearchContainer
