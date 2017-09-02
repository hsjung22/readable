import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import PencilIcon from 'react-icons/lib/fa/pencil'
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
        {/* <nav className="navbar navbar-inverse navbar-fixed-top"> */}
        <Navbar inverse fixedTop>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to='/'>
                Readable
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                {this.props.categories.map((category, i) =>
                  <li key={i}>
                    <Link to={`/${category.path}`}>
                      <span className="category-link">{category.name}</span>
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/posts/new">
                    <PencilIcon size={24} /> New Post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
        {/* </nav> */}

        <Switch>
          <Route
            exact
            path='/'
            render={() => <CategoryContainer category="all" />}
          />
          {this.props.categories.map((category, i) =>
            <Route
              key={i}
              exact
              path={`/${category.path}`}
              render={() => <CategoryContainer category={category.name} />}
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
                <PostContainer postId={post.id} />
              )}
            />
          )}
        </Switch>
      </div>
    )
  }
}

export default App
