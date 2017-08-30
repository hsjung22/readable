import { SET_CURRENT_COMMENT } from '../actions'

const currentState = (state = { comment: null, post: null }, action) => {
  switch(action.type) {
    case SET_CURRENT_COMMENT:
      return { ...state, comment: action.commentId }
    default:
      return state
  }
}

export default currentState
