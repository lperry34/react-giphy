import React, { Component } from 'react'
import SearchContainer from './searchContainer'
import './App.css';


class Home extends Component{
  render(){
    return(
      <div className="Giphy">
        <h1>Giphy Lab</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default Home
