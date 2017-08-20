import { combineReducers } from 'redux'
import { RECEIVE_CATEGORIES, RECEIVE_POSTS, RECEIVE_COMMENTS } from '../actions'

export const categories = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export const posts = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state
  }
}

export const comments = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    default:
      return state
  }
}

export default combineReducers({ categories, posts, comments })
