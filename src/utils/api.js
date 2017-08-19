const headers = { 'Authorization': 'whatever' }

export const fetchCategories = () =>
  fetch('http://localhost:5001/categories', {
    method: 'GET',
    headers
  })
    .then(result => result.json())
    .then(result => result.categories)



// export function fetchCategories (food = '') {
//   food = food.trim()

//   return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
//     .then((res) => res.json())
//     .then(({ hits }) => hits.map(({ recipe }) => recipe))
// }



// {
// "categories": [
//   {
// "name": "react",
// "path": "react"
// },
//   {
// "name": "redux",
// "path": "redux"
// },
//   {
// "name": "udacity",
// "path": "udacity"
// }


// ],
// }