import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList'

function Home(props) {
  return (
    <div>
      <h1>Home screen</h1>

      <br />

      <Link to="/posts/new">
        New Post
      </Link>

      <br />

      {props.categories.map((category, i) =>
        <div key={i}>
          <Link to={`/${category.path}`}>
            {category.name}
          </Link>
        </div>
      )}

      <br />

      <PostList
        posts={props.posts}
        toggleSort={props.toggleSort}
      />

    </div>
  )
}

export default Home
