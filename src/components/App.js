import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>hello world!</div>
    )
  }
}

export default App