import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import SortByToggle from './SortByToggle'
import VoteButtons from './VoteButtons'

function PostList ({ posts, sortBy, toggleSort, votePost }) {
  const handletoggleSort = (e) => {
    toggleSort({ posts: e.target.value })
  }

  return (
    <div>
      <div className="col-sm-10">
        <SortByToggle
          sortBy={sortBy}
          handletoggleSort={handletoggleSort}
        />
        <hr />
        <ul className="list-group">
          {posts.map(post =>
            <li key={post.id} className="list-group-item">
              <Link to={`/${post.category}/${post.id}`}>
                <p className="post-title">{post.title}</p>
              </Link>
              <p className="date-display"><CalendarIcon size={20} /> {moment(post.timestamp).format("LL")}</p>
              <p>Vote Score: {post.voteScore}</p>
              <VoteButtons
                id={post.id}
                onVoteClick={votePost}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default PostList
