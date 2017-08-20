import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootContainer from '../containers/HomeContainer'
import Category from './Category';

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
                <Category name={category.name} />
              )}
            />
          )}
        </Switch>
      </div>
    )
  }
}

export default App
