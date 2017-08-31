import React, { Component } from 'react';
import PostDetails from './PostDetails'
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
    const { post, comments, votePost } = this.props
    return(
      <div className="container">
        <PostDetails
          post={post}
          votePost={votePost}
        />


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
