import React from 'react';
import PostList from './PostList'

function Category({ name, posts, toggleSort, sortBy }) {
  return(
    <div>
      <h1>Category</h1>
      <h1>{name} screen</h1>

      <br />

      <PostList
        posts={posts}
        toggleSort={toggleSort}
        sortBy={sortBy}
      />
    </div>
  )
}

export default Category
