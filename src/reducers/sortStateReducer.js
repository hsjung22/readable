const sortState = (state = { comments: "-voteScore", posts: "-voteScore" }, action) => {
  switch(action.type) {
    // case TOGGLE_COMMENT_SORT:
    //   return {...state, comment: action.commentId}
    default:
      return state
  }
}

export default sortState
