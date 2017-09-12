import { combineReducers } from 'redux'
import categories from './categoriesReducer'
import comments from './commentsReducer'
import currentState from './currentStateReducer'
import posts from './postsReducer'
import sortState from './sortStateReducer'

export default combineReducers({
  categories,
  posts,
  comments,
  currentState,
  sortState,
})
