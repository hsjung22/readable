const headers = {
  'Authorization': 'whatever',
  'Content-Type': 'application/json'
}

export const fetchCategories = () =>
  fetch('http://localhost:5001/categories', {
    method: 'GET',
    headers
  })
    .then(result => result.json())
    .then(data => data.categories)


export const fetchPosts = () =>
  fetch('http://localhost:5001/posts', {
    method: 'GET',
    headers
  })
    .then(result => result.json())

export const fetchComments = (id) =>
  fetch(`http://localhost:5001/posts/${id}/comments`, {
    method: 'GET',
    headers
  })
    .then(result => result.json())

export const postComment = ({ body, author, parentId }) =>
  fetch('http://localhost:5001/comments', {
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
