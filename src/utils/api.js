const headers = { 'Authorization': 'whatever' }

export const fetchCategories = () =>
  fetch('http://localhost:5001/categories', {
    method: 'GET',
    headers
  })
    .then(result => result.json())
    .then(result => result.categories)