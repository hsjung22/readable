import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

function Category(props) {
  return(
    <div>
      <Link to='/'>
        Home
      </Link>
      <h1>Category</h1>
      <h1>{props.name} screen</h1>

      {/* {props.posts.map(post =>
        <div key={post.id}>
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
        </div>
      )} */}

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

export default Category
