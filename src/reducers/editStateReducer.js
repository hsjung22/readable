import { SET_EDIT_COMMENT } from '../actions'

const editState = (state = { comment: null, post: null }, action) => {
  switch(action.type) {
    case SET_EDIT_COMMENT:
      return { ...state, comment: action.commentId }
    default:
      return state
  }
}

export default editState
