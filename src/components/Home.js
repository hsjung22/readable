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
          <p>time: {post.timestamp}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
          <p>author: {post.author}</p>
          <p>category: {post.category}</p>
          <p>score: {post.voteScore}</p>
          <p>deleted: {post.deleted}</p>
        </div>
      )}
    </div>
  )
}

export default Home
