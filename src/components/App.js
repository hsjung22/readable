import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PencilIcon from 'react-icons/lib/fa/pencil'
import HomeContainer from '../containers/HomeContainer'
import CategoryContainer from '../containers/CategoryContainer'
import PostContainer from '../containers/PostContainer'
import PostNewContainer from '../containers/PostNewContainer'
import PostEditContainer from '../containers/PostEditContainer'

class App extends Component {

  componentDidMount() {
    // fetch categories and posts
    this.props.fetchDefaults()
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link
                className="navbar-brand"
                to='/'
              >
                Readable
              </Link>

            </div>
            <ul className="nav navbar-nav pull-right">
              {this.props.categories.map((category, i) =>
                <li key={i} >
                  <Link to={`/${category.path}`}>
                    {category.name}
                  </Link>
                </li>
              )}
              <li>
                <Link to="/posts/new">
                  <PencilIcon size={24}/> New Post
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route
            exact
            path='/'
            component={HomeContainer}
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


          <Route
            exact
            path='/posts/new'
            component={PostNewContainer}
          />
          <Route
            path="/posts/:id/edit"
            component={PostEditContainer}
          />
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
