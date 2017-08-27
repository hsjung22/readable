import React from 'react'
import moment from 'moment'

function CommentView({ comment, setEditComment, voteComment, currentlyEditing }) {
  return(
    <div>
      <button
        onClick={() => {
          voteComment({
            id: comment.id,
            option: "upVote",
          })
        }}
      >
        Up
      </button>

      <button
        onClick={() => {
          voteComment({
            id: comment.id,
            option: "downVote",
          })
        }}
      >
        Down
      </button>

      <h5>{comment.voteScore}</h5>

      <p>{comment.id}</p>
      <p>{moment(comment.timestamp).format("l")}</p>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <button
        // disable edit button if an edit is in progress
        disabled={currentlyEditing}
        onClick={() => {
          setEditComment(comment.id)
        }}
      >
        edit
      </button>
    </div>
  )
}

export default CommentView
