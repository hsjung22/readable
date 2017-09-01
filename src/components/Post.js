import React from 'react';
import PostDetails from './PostDetails'
import CommentContainer from '../containers/CommentContainer'

function Post({ post, votePost }) {

  return (
    <div className="container">
      <PostDetails
        post={post}
        votePost={votePost}
      />
      <CommentContainer post={post} />
    </div>
  )
}

export default Post
