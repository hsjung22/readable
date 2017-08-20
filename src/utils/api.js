const headers = { 'Authorization': 'whatever' }

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
