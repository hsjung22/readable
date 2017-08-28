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

        <button
          onClick={() => {
            this.props.votePost({
              id: post.id,
              option: "upVote",
            })
          }}
        >
          Up
        </button>

        <button
          onClick={() => {
            this.props.votePost({
              id: post.id,
              option: "downVote",
            })
          }}
        >
          Down
        </button>

        <h5>Vote Score:{post.voteScore}</h5>
        <p>{post.timestamp}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.author}</p>
        <p>{post.category}</p>

        <h1>Comments ({comments.length})</h1>
        <select
          defaultValue={this.props.sortBy}
          onChange={(e) => {
            this.props.toggleSort({ comments: e.target.value })
          }}
        >
          <option value="-voteScore">Vote</option>
          <option value="-timestamp">Date</option>
        </select>


        <h1>Add Comment</h1>
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

        {comments.map(comment =>
          <CommentContainer
            key={comment.id}
            comment={comment}
          />
        )}



      </div>
    )
  }
}

export default Post
