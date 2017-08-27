import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

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

      <button onClick={() => {props.toggleSort({ posts: "-voteScore" })}}>
        Vote Score
      </button>

      <button onClick={() => {props.toggleSort({ posts: "-timestamp" })}}>
        Date
      </button>
      <br />

      {props.posts.map(post =>
        <div key={post.id}>
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
          Vote Score: {post.voteScore}
          Date: {moment(post.timestamp).format("l")}
        </div>
      )}
    </div>
  )
}

export default Home
