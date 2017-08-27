import React from 'react'
import moment from 'moment'

function CommentView({ comment, setEditComment }) {
  return(
    <div>
      <p>{comment.id}</p>
      <p>{moment(comment.timestamp).format("l")}</p>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.voteScore}</p>
      {/* TODO: disable button if commentId is !null */}
      <button onClick={()=>{setEditComment(comment.id)}}>edit</button>
    </div>
  )
}

export default CommentView
