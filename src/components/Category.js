import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
  return(
    <div>
      <h1>Category</h1>
      <h1>{props.name} screen</h1>

      {props.posts.map(post =>
        <div key={post.id}>
          <p>time: {post.timestamp}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
          <p>author: {post.author}</p>
          <p>category: {post.category}</p>
          <p>score: {post.voteScore}</p>
          <p>deleted: {post.deleted}</p>
        </div>
      )}


      <Link
        to='/'
      >
        Home
      </Link>
    </div>
  )
}

export default Category
