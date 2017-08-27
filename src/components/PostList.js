import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

function PostList (props) {
  return (
    <div>
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

export default PostList
