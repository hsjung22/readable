import React from 'react';
import { Link } from 'react-router-dom';

function Root(props) {
  return (
    <div>
      <h1>Root screen</h1>

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

export default Root
