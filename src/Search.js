import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form className="Search-form" onSubmit={this.props.handleSubmit}>
          <input type="text"
                 value={this.props.query}
                 onChange={this.props.handleChange}
                 placeholder="Search a gif" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}



export default Search;
