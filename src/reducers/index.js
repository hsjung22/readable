import { combineReducers } from 'redux'
import categories from './categoriesReducer'
import comments from './commentsReducer'
import editState from './editStateReducer'
import posts from './postsReducer'

export default combineReducers({
  categories,
  posts,
  comments,
  editState
})
