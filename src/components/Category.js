import React from 'react';
import PostList from './PostList'

function Category(props) {
  return(
    <div>
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
