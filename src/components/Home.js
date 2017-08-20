import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>Home screen</h1>

      {props.categories.map((category, i) =>
        <div key={i}>
          <Link
            to={`/${category.path}`}
          >
            {category.name}
          </Link>
        </div>
      )}


      <br />

      {props.posts.map(post =>
        <div key={post.id}>
          <p>{post.timestamp}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p>{post.author}</p>
          <p>{post.category}</p>
          <p>{post.voteScore}</p>
          <p>{post.deleted}</p>
        </div>
      )}
    </div>
  )
}

export default Home
