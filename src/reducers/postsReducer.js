import {
  RECEIVE_POSTS,
  RECEIVE_POST,
} from '../actions'

const posts = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return [...state, action.post]
    default:
      return state
  }
}

export default posts
