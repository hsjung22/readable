import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {

    return (
      <div>
        {this.props.categories.map((category, i) =>
          <p key={i}>{category.name}</p>
        )}
      </div>
    )
  }
}

export default App