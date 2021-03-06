import * as ReadableAPI from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const SET_CURRENT_COMMENT = 'SET_CURRENT_COMMENT'
export const TOGGLE_SORT = 'TOGGLE_SORT'

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const addPost = post => ({
  type: ADD_POST,
  post
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const setCurrentComment = commentId => ({
  type: SET_CURRENT_COMMENT,
  commentId
})

export const toggleSort = sortBy => ({
  type: TOGGLE_SORT,
  sortBy
})

const fetchCategories = () => dispatch => (
  ReadableAPI
    .fetchCategories()
    .then(categories =>
      dispatch(receiveCategories(categories))
    )
)

const fetchPosts = () => dispatch => (
  ReadableAPI
    .fetchPosts()
    .then(posts =>
      dispatch(receivePosts(posts))
    )
)

export const fetchDefaults = () => dispatch => (
  dispatch(fetchCategories())
    .then(() => dispatch(fetchPosts()))
)

export const fetchComments = (id) => dispatch => (
  ReadableAPI
    .fetchComments(id)
    .then(comments =>
      dispatch(receiveComments(comments))
    )
)

export const createComment = (comment) => dispatch => (
  ReadableAPI
    .createComment(comment)
    .then(comment =>
      dispatch(addComment(comment))
    )
)

export const updateComment = (comment) => dispatch => (
  ReadableAPI
    .updateComment(comment)
    .then(comment =>
      dispatch(receiveComment(comment))
    )
)

export const deleteComment = (commentId) => dispatch => (
  ReadableAPI
    .deleteComment(commentId)
    .then(comment =>
      dispatch(receiveComment(comment))
    )
)

export const createPost = (post) => dispatch => (
  ReadableAPI
    .createPost(post)
    .then(post =>
      dispatch(addPost(post))
    )
)

export const updatePost = (post) => dispatch => (
  ReadableAPI
    .updatePost(post)
    .then(post =>
      dispatch(receivePost(post))
    )
)

export const deletePost = (postId) => dispatch => (
  ReadableAPI
    .deletePost(postId)
    .then(post =>
      dispatch(receivePost(post))
    )
)

export const votePost = (postVote) => dispatch => (
  ReadableAPI
    .votePost(postVote)
    .then(post =>
      dispatch(receivePost(post))
    )
)

export const voteComment = (commentVote) => dispatch => (
  ReadableAPI
    .voteComment(commentVote)
    .then(comment =>
      dispatch(receiveComment(comment))
    )
)
