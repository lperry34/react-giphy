import React, { Component } from 'react';
import axios from 'axios'

class Results extends Component{
  render() {
    let results = this.props.gif.map(something=>{
      var somethingElse = something.images.fixed_height_small.url;
      return <img src={somethingElse} width="100" height="auto" />
    })
    console.log(this.props.gif)
    return (
      <div>
      {results}
      </div>
    )
  }
};

export default Results;
