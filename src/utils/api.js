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

export const postComment = ({ body, author, parentId }) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: Date.now(),
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
