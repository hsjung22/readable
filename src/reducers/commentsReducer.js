import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  RECEIVE_COMMENT,
} from '../actions'

const comments = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case RECEIVE_COMMENT:
      return (
        state.map(comment => comment.id === action.comment.id
          ? action.comment
          : comment
        )
      )
    case ADD_COMMENT:
      return [...state, action.comment]
    default:
      return state
  }
}

export default comments
