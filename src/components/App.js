import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootContainer from '../containers/HomeContainer'
import CategoryContainer from '../containers/CategoryContainer'

class App extends Component {

  componentDidMount() {
    // fetch categories and posts
    this.props.fetchDefaults()
  }

  render() {
    console.log("APP RENDERED")
    return (
      <div>
        <Route
          exact
          path='/'
          component={RootContainer}
        />
        <Switch>
          {this.props.categories.map((category, i) =>
            <Route
              key={i}
              path={`/${category.path}`}
              render={() => (
                <CategoryContainer name={category.name} />
              )}
            />
          )}
        </Switch>
      </div>
    )
  }
}

export default App
