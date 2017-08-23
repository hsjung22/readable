import { combineReducers } from 'redux'
import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  SET_EDIT_COMMENT,
  RECEIVE_COMMENT,
} from '../actions'

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

export const editState = (state = { comment: null, post: null }, action) => {
  switch(action.type) {
    case SET_EDIT_COMMENT:
      return {...state, comment: action.commentId}
    default:
      return state
  }
}

export default combineReducers({ categories, posts, comments, editState })
