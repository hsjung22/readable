import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import CategoryHeader from './CategoryHeader'
import VoteButtons from './VoteButtons'

function PostList ({ posts, sortBy, toggleSort, votePost }) {
  return (
    <div>
      <CategoryHeader
        posts={posts}
        sortBy={sortBy}
        toggleSort={toggleSort}
      />
      <hr />
      <ul className="list-group">
        {posts.map(post =>
          <li key={post.id} className="list-group-item">
            <Link to={`/${post.category}/${post.id}`}>
              <p className="post-title">{post.title}</p>
            </Link>
            <p>Date: {moment(post.timestamp).format("LL")}</p>
            <p>Vote Score: {post.voteScore}</p>
            <VoteButtons
              id={post.id}
              onVoteClick={votePost}
            />
          </li>
        )}
      </ul>

    </div>
  )
}

export default PostList
