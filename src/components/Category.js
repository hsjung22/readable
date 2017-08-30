import React from 'react';
import PostList from './PostList'
import CategorySideNav from './CategorySideNav'

function Category(props) {
  const {
    currentPosts,
    posts,
    sortBy,
    categories,
    category,
    toggleSort,
    votePost,
  } = props

  return(
    <div>
      <div className="col-xs-2">
        <CategorySideNav
          currentCategory={category}
          categories={categories}
          posts={posts}
        />
      </div>

      <div className="col-xs-10">
        <PostList
          posts={currentPosts}
          toggleSort={toggleSort}
          sortBy={sortBy}
          votePost={votePost}
        />
      </div>
    </div>
  )
}

export default Category
