import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  ADD_POST,
} from '../actions'

const posts = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case ADD_POST:
      return [...state, action.post]
    case RECEIVE_POST:
      return (
        state.map(post => post.id === action.post.id
          ? action.post
          : post
        )
      )
    default:
      return state
  }
}

export default posts
