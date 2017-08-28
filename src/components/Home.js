import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList'

function Home(props) {
  return (
    <div>
      <div className="col-xs-2">
        <ul className="nav nav-pills nav-stacked">
          {props.categories.map((category, i) =>
            <li
              key={i}
              role="presentation"
              className={
                props.currentCategory === category.name
                  ? "active"
                  : ""
              }
            >
              <Link
                to={`/${category.path}`}
                onClick={()=>{props.setCurrentCategory(category.name)}}
              >
                {category.name}
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="col-xs-10">
        <PostList
          posts={props.posts}
          toggleSort={props.toggleSort}
          sortBy={props.sortBy}
        />
      </div>
    </div>
  )
}
export default Home
