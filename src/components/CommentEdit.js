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

  render() {
    const { comment } = this.props
    return(
      // TODO: abstract comment form
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
    )
  }
}

export default CommentEdit
