import React, { Component } from 'react'

class CommentEdit extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updateComment({
      id: this.props.comment.id,
      body: this.body.value,
      author: this.author.value,
    })
      // switch back to the "view" mode
      .then(() => this.props.setEditComment(null))
  }

  handleDelete = (commentId) => {
    this.props.deleteComment(commentId)
      .then(() => this.props.setEditComment(null))
  }

  render() {
    const { comment, setEditComment } = this.props
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              ref={(input) => this.author = input}
              defaultValue={comment.author}
            />
          </label>
          <label>
            Comment:
            <input
              type="text"
              ref={(input) => this.body = input}
              defaultValue={comment.body}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={()=>{this.handleDelete(comment.id)}}>delete</button>

        <button onClick={() => {setEditComment(null)}}>Cancel</button>
      </div>
    )
  }
}

export default CommentEdit
