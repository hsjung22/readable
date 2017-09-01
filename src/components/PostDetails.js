import React from 'react'
import { Link } from 'react-router-dom';
import EditIcon from 'react-icons/lib/fa/edit'
import PencilSquare from 'react-icons/lib/fa/pencil-square'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import moment from 'moment'
import VoteButtons from './VoteButtons'

function PostDetails({ post, votePost }) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <Link
          className="btn btn-default pull-right"
          to={`/posts/${post.id}/edit`}
        >
          <EditIcon size={24} /> Edit
        </Link>
        <p className="post-details-title">{post.title}</p>
        <p>
          <span className="author-display">
            <PencilSquare size={20} /> {post.author}
          </span>
          <span className="date-display">
            <CalendarIcon size={20} /> {moment(post.timestamp).format("LL")}
          </span>
        </p>
        <p>{post.body}</p>
        <p className="vote-score-display">Vote Score: {post.voteScore}</p>
        <VoteButtons
          id={post.id}
          onVoteClick={votePost}
        />
      </div>
    </div>

  )
}

export default PostDetails
