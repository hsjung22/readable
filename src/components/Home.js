import React from 'react';
import PostList from './PostList'

function Home(props) {
  return (
    <div>
      <PostList
        posts={props.posts}
        toggleSort={props.toggleSort}
        sortBy={props.sortBy}
      />
    </div>
  )
}
export default Home
