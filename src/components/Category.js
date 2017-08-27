import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList'

function Category(props) {
  return(
    <div>
      <Link to='/'>
        Home
      </Link>
      <h1>Category</h1>
      <h1>{props.name} screen</h1>

      <br />

      <PostList
        posts={props.posts}
        toggleSort={props.toggleSort}
      />
    </div>
  )
}

export default Category
