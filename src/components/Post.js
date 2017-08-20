import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  componentDidMount() {
    // fetch all comments from current post's id
    this.props.fetchComments(this.props.id)
  }

  render() {
    const { post, comments } = this.props

    return(
      <div>
        <Link to='/'>
          Home
        </Link>

        <h1>Post</h1>
        <p>{post.timestamp}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.author}</p>
        <p>{post.category}</p>

        <h1>Comments</h1>
        {comments.map(comment =>
          <div key={comment.id}>
            <p>{comment.timestamp}</p>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.voteScore}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Post
