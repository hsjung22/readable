import React from 'react'
import CommentViewContainer from '../containers/CommentViewContainer'
import CommentEditContainer from '../containers/CommentEditContainer'

function CommentMode({ comment, editCommentId }) {

  return comment.id === editCommentId
    ? <CommentEditContainer comment={comment} />
    : <CommentViewContainer comment={comment} />
}

export default CommentMode
