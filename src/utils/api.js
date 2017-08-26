import uuidv4 from 'uuid/v4'

const headers = {
  'Authorization': 'whatever',
  'Content-Type': 'application/json'
}

const api = 'http://localhost:5001'

export const fetchCategories = () =>
  fetch(`${api}/categories`, {
    method: 'GET',
    headers
  })
    .then(result => result.json())
    .then(data => data.categories)


export const fetchPosts = () =>
  fetch(`${api}/posts`, {
    method: 'GET',
    headers
  })
    .then(result => result.json())

export const fetchComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, {
    method: 'GET',
    headers
  })
    .then(result => result.json())

export const createComment = ({ body, author, parentId }) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: uuidv4(),
      timestamp: Date.now(),
      body,
      author,
      parentId,
    }),
  })
    .then(result => result.json())

export const updateComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({...comment, timestamp: Date.now()}),
  })
    .then(result => result.json())

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  })
    .then(result => result.json())

export const createPost = ({ title, body, author, category }) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: uuidv4(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
    }),
  })
    .then(result => result.json())

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({...post, timestamp: Date.now()}),
  })
    .then(result => result.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers,
  })
    .then(result => result.json())
