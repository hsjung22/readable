import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

function PostList (props) {
  return (
    <div>
      <h3>Posts ({props.posts.length})</h3>
      <button onClick={() => {props.toggleSort({ posts: "-voteScore" })}}>
        Vote Score
      </button>

      <button onClick={() => {props.toggleSort({ posts: "-timestamp" })}}>
        Date
      </button>

      <hr />


      <ul className="list-group">
        {props.posts.map(post =>
          <li key={post.id} className="list-group-item">
            <Link to={`/${post.category}/${post.id}`}>
              {post.title}
            </Link>
            Vote Score: {post.voteScore}
            Date: {moment(post.timestamp).format("l")}
          </li>
        )}
      </ul>

    </div>
  )
}

export default PostList
