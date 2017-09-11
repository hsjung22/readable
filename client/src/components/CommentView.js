import React from 'react'
import EditIcon from 'react-icons/lib/fa/edit'
import VoteButtons from './VoteButtons'
import AuthorDateScore from './AuthorDateScore'

function CommentView({ comment, setCurrentComment, voteComment, currentlyEditing }) {
  return(
    <div>
      <button
        // disable edit button if an edit is in progress
        disabled={currentlyEditing}
        className="btn btn-default pull-right"
        onClick={() => {
          setCurrentComment(comment.id)
        }}
      >
        <EditIcon size={24} />
      </button>

      <AuthorDateScore entity={comment} />

      <p>{comment.body}</p>
      <VoteButtons
        entity={comment}
        onVoteClick={voteComment}
      />

    </div>
  )
}

export default CommentView
