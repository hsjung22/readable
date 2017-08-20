import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
  return(
    <div>
      <Link to='/'>
        Home
      </Link>
      <h1>Category</h1>
      <h1>{props.name} screen</h1>

      {props.posts.map(post =>
        <div key={post.id}>
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Category
