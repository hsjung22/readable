import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootContainer from '../containers/HomeContainer'
import CategoryContainer from '../containers/CategoryContainer'
import PostContainer from '../containers/PostContainer'
import PostNewContainer from '../containers/PostNewContainer'


class App extends Component {

  componentDidMount() {
    // fetch categories and posts
    this.props.fetchDefaults()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/'
            component={RootContainer}
          />
          <Route
            exact
            path='/posts/new'
            component={PostNewContainer}
          />
          {this.props.categories.map((category, i) =>
            <Route
              key={i}
              exact
              path={`/${category.path}`}
              render={() => (
                <CategoryContainer name={category.name} />
              )}
            />
          )}
          {this.props.posts.map(post =>
            <Route
              key={post.id}
              exact
              path={`/${post.category}/${post.id}`}
              render={() => (
                <PostContainer id={post.id} />
              )}
            />
          )}
        </Switch>
      </div>
    )
  }
}

export default App
