import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

function PostList (props) {
  return (
    <div>
      <h3>Posts ({props.posts.length})</h3>
      <select
        defaultValue={props.sortBy}
        onChange={(e) => {
          props.toggleSort({ posts: e.target.value })
        }}
      >
        <option value="-voteScore">Vote</option>
        <option value="-timestamp">Date</option>
      </select>

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
