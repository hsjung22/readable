import * as ReadableAPI from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'


const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

const fetchCategories = () => dispatch => (
  ReadableAPI
    .fetchCategories()
    .then(categories => {
      dispatch(receiveCategories(categories))
    })
)

const fetchPosts = () => dispatch => (
  ReadableAPI
    .fetchPosts()
    .then(posts => {
      dispatch(receivePosts(posts))
    })
)

export const fetchDefaults = () => dispatch => (
  dispatch(fetchCategories())
    .then(() => dispatch(fetchPosts()))
)

export const fetchComments = (id) => dispatch => (
  ReadableAPI
    .fetchComments(id)
    .then(comments => {
      dispatch(receiveComments(comments))
    })
)

export const postComment = (comment) => dispatch => (
  ReadableAPI
    .postComment(comment)
    .then(comment => {
      dispatch(addComment(comment))
    })
)
