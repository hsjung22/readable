import React, { Component } from 'react'
import TrashIcon from 'react-icons/lib/fa/trash'

class CommentEdit extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updateComment({
      id: this.props.comment.id,
      body: this.body.value,
      author: this.author.value,
    })
      // switch back to the "view" mode
      .then(() => this.props.setCurrentComment(null))
  }

  handleDelete = (commentId) => {
    this.props.deleteComment(commentId)
      .then(() => this.props.setCurrentComment(null))
  }

  render() {
    const { comment, setCurrentComment } = this.props
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 form-group">
              <textarea
                className="form-control"
                placeholder="Add a comment..."
                type="text"
                defaultValue={comment.body}
                ref={(input) => this.body = input}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 form-group">
              <input
                className="form-control"
                placeholder="Your Name"
                type="text"
                defaultValue={comment.author}
                ref={(input) => this.author = input}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button
                className="btn btn-danger pull-right"
                type="button"
                onClick={()=>{this.handleDelete(comment.id)}}
              >
                <TrashIcon size={18} />
              </button>
              <button
                className="btn btn-default pull-right"
                type="button"
                onClick={() => {setCurrentComment(null)}}
              >
                Cancel
              </button>
              <input
                className="btn btn-default pull-right"
                type="submit"
                value="Update"
              />
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default CommentEdit
