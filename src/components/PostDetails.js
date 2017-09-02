import React from 'react'
import { Link } from 'react-router-dom';
import EditIcon from 'react-icons/lib/fa/edit'
import VoteButtons from './VoteButtons'
import AuthorDateScore from './AuthorDateScore'

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

        <AuthorDateScore entity={post} />

        <p>{post.body}</p>
        <VoteButtons
          id={post.id}
          onVoteClick={votePost}
        />
      </div>
    </div>

  )
}

export default PostDetails
