import { SET_CURRENT_COMMENT, SET_CURRENT_CATEGORY } from '../actions'

const currentState = (state = { comment: null, post: null, category: "" }, action) => {
  switch(action.type) {
    case SET_CURRENT_COMMENT:
      return { ...state, comment: action.commentId }
    case SET_CURRENT_CATEGORY:
      return {...state, category: action.category}
    default:
      return state
  }
}

export default currentState
