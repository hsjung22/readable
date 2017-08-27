import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../containers/CommentContainer';

class Post extends Component {

  componentDidMount() {
    // fetch all comments from current post's id
    this.props.fetchComments(this.props.id)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createComment({
      body: this.body.value,
      author: this.author.value,
      parentId: this.props.id,
    })

    // after submitting the request, "clear" the form
    this.body.value = ''
    this.author.value = ''
  }

  render() {
    const { post, comments } = this.props
    return(
      <div>
        <div>
          <Link to='/'>
            Home
          </Link>
        </div>


        <h1>Post</h1>
        <div>
          <Link to={`/posts/${post.id}/edit`}>
            Edit
          </Link>
        </div>

        <p>{post.timestamp}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.author}</p>
        <p>{post.category}</p>
        <p>{post.voteScore}</p>

        <h1>Comments ({comments.length})</h1>
        <button onClick={() => {this.props.toggleSort({ comments: "-voteScore" })}}>
          Vote Score
        </button>

        <button onClick={() => {this.props.toggleSort({ comments: "-timestamp" })}}>
          Date
        </button>



        {comments.map(comment =>
          <CommentContainer
            key={comment.id}
            comment={comment}
          />
        )}

        <h1>Add Comment</h1>
        {/* TODO: abstract comment form */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(input) => this.author = input} />
          </label>
          <label>
            Comment:
            <input type="text" ref={(input) => this.body = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>


      </div>
    )
  }
}

export default Post
