import React, { Component } from 'react'
import CommentModeContainer from '../containers/CommentModeContainer'
import SortByToggle from './SortByToggle'

class Comment extends Component {
  componentDidMount() {
    // fetch all comments from current post's id
    this.props.fetchComments(this.props.post.id)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createComment({
      body: this.body.value,
      author: this.author.value,
      parentId: this.props.post.id,
    })
    // after submitting the request, "clear" the form
    this.body.value = ''
    this.author.value = ''
  }

  handletoggleSort = (e) => {
    this.props.toggleSort({ comments: e.target.value })
  }

  render() {
    const { comments, sortBy } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-12 form-group">
                  <textarea
                    className="form-control"
                    placeholder="Add a comment..."
                    type="text"
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
                    ref={(input) => this.author = input}
                  />
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="row">
                <div className="col-sm-12">
                  <input
                    className="btn btn-default pull-right"
                    type="submit"
                    value="Comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-8">
                <p className="comment-headers">
                  Comments ({comments.length})
                </p>
              </div>
              <div className="col-sm-4">
                <SortByToggle
                  sortBy={sortBy}
                  handletoggleSort={this.handletoggleSort}
                />
              </div>
            </div>
          </div>
          <ul className="list-group">
            {comments.map(comment =>
              <li className="list-group-item" key={comment.id}>
                <CommentModeContainer comment={comment} />
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comment
