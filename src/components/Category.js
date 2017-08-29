import React from 'react';
import PostList from './PostList'
import CategorySideNav from './CategorySideNav'

function Category(props) {
  const {
    currentPosts,
    posts,
    toggleSort,
    sortBy,
    categories,
    currentCategory,
    setCurrentCategory,
    votePost,
  } = props

  return(
    <div>
      <div className="col-xs-2">
        <CategorySideNav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
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
