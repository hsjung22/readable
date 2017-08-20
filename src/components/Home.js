import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>Home screen</h1>

      {props.categories.map((category, i) =>
        <div key={i}>
          <Link
            to={`/${category.path}`}
          >
            {category.name}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home