import React from 'react'
import { Link } from 'react-router-dom';

function CategorySideNav({ currentCategory, setCurrentCategory, categories, posts }){

  return (
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
          All {posts.length > 0 && `(${posts.length})`}
        </Link>
      </li>

      {categories.map((category, i) => {
        const postCount = posts.filter(post => (post.category === category)).length
        return (
          <li
            key={i}
            role="presentation"
            className={
              currentCategory === category
                ? "active"
                : ""
            }
          >
            <Link
              to={`/${category}`}
              onClick={()=>{setCurrentCategory(category)}}
            >
              <span className="category-link">{category} {postCount > 0 && `(${postCount})`}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategorySideNav
