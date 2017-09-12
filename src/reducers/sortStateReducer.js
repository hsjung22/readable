import { TOGGLE_SORT } from '../actions'

const sortState = (state = { comments: "-voteScore", posts: "-voteScore" }, action) => {
  switch(action.type) {
    case TOGGLE_SORT:
      return {...state, ...action.sortBy}
    default:
      return state
  }
}

export default sortState
