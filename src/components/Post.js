import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
  return(
    <div>
      <h1>Post</h1>

      <p>{props.post.timestamp}</p>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
      <p>{props.post.author}</p>
      <p>{props.post.category}</p>

      <Link to='/'>
        Home
      </Link>
    </div>
  )
}

export default Post
