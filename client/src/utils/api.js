import uuidv4 from 'uuid/v4'

const headers = {
  'Authorization': 'whatever',
  'Content-Type': 'application/json'
}

export const fetchCategories = () =>
  fetch("/categories", {
    method: 'GET',
    headers
  })
    .then(result => result.json())
    .then(data => data.categories)


export const fetchPosts = () =>
  fetch("/posts", {
    method: 'GET',
    headers
  })
    .then(result => result.json())

export const fetchComments = (id) =>
  fetch(`/posts/${id}/comments`, {
    method: 'GET',
    headers
  })
    .then(result => result.json())

export const createComment = ({ body, author, parentId }) =>
  fetch("/comments", {
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
  fetch(`/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({...comment, timestamp: Date.now()}),
  })
    .then(result => result.json())

export const deleteComment = (commentId) =>
  fetch(`/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  })
    .then(result => result.json())

export const createPost = ({ title, body, author, category }) =>
  fetch("/posts", {
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
  fetch(`/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({...post, timestamp: Date.now()}),
  })
    .then(result => result.json())

export const deletePost = (postId) =>
  fetch(`/posts/${postId}`, {
    method: 'DELETE',
    headers,
  })
    .then(result => result.json())

export const votePost = (postVote) =>
  fetch(`/posts/${postVote.id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(postVote),
  })
    .then(result => result.json())

export const voteComment = (commentVote) =>
  fetch(`/comments/${commentVote.id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(commentVote),
  })
    .then(result => result.json())
