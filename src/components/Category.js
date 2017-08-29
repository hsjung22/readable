import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList'

function Category({ posts, toggleSort, sortBy, categories, currentCategory, setCurrentCategory }) {
  return(
    <div>
      <div className="col-xs-2">
        <ul className="nav nav-pills nav-stacked">
          <li
            role="presentation"
            className={
              currentCategory === 'all'
                ? "active"
                : ""
            }
          >
            <Link
              to="/"
              onClick={()=>{setCurrentCategory('all')}}
            >
              All
            </Link>
          </li>
          {categories.map((category, i) =>
            <li
              key={i}
              role="presentation"
              className={
                currentCategory === category.name
                  ? "active"
                  : ""
              }
            >
              <Link
                to={`/${category.path}`}
                onClick={()=>{setCurrentCategory(category.name)}}
              >
                {category.name}
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="col-xs-10">
        <PostList
          posts={posts}
          toggleSort={toggleSort}
          sortBy={sortBy}
        />
      </div>
    </div>
  )
}

export default Category
