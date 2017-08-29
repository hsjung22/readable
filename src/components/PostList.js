import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

function PostList ({ posts, sortBy, toggleSort, votePost }) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-6">
          <h4>Posts {posts.length > 0 && `(${posts.length})`}</h4>
        </div>
        <div className="col-xs-6">
          <div className="form-inline pull-right">
            <div className="form-group">
              <label>Sort by</label>
              <select
                className="form-control"
                defaultValue={sortBy}
                onChange={(e) => {
                  toggleSort({ posts: e.target.value })
                }}
                >
                  <option value="-voteScore">Vote</option>
                  <option value="-timestamp">Date</option>
                </select>
            </div>
          </div>
        </div>
      </div>

      <hr />


      <ul className="list-group">
        {posts.map(post =>
          <li key={post.id} className="list-group-item">

            <button
              onClick={() => {
                votePost({
                  id: post.id,
                  option: "upVote",
                })
              }}
            >
              Up
            </button>

            <button
              onClick={() => {
                votePost({
                  id: post.id,
                  option: "downVote",
                })
              }}
            >
              Down
            </button>

            Vote Score: {post.voteScore}
            <Link to={`/${post.category}/${post.id}`}>
              {post.title}
            </Link>
            Date: {moment(post.timestamp).format("l")}
          </li>
        )}
      </ul>

    </div>
  )
}

export default PostList
