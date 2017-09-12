import React, { Component } from 'react'
import TrashIcon from 'react-icons/lib/fa/trash'
import { Link } from 'react-router-dom'

class PostEdit extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updatePost({
      id: this.props.post.id,
      title: this.title.value,
      body: this.body.value,
      author: this.author.value,
      category: this.category.value,
    })
      .then(({ post }) => {
        // redirect to the edited post's page
        this.props.history.push(`/${post.category}/${post.id}`)
      })
  }

  handleDelete = (postId) => {
    this.props.deletePost(postId)
      .then(this.props.history.push('/'))
  }

  render() {
    const { post } = this.props
    return(
      <div className="container">
        {post &&
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-sm-8 form-group">
                      <input
                        className="form-control"
                        placeholder="Title"
                        type="text"
                        defaultValue={post.title}
                        ref={(input) => this.title = input}
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <select
                        className="form-control"
                        defaultValue={post.category}
                        ref={(input) => this.category = input}
                      >
                        {this.props.categories.map((category, index) =>
                          <option key={index} value={category}>{category}</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 form-group">
                      <input
                        className="form-control"
                        placeholder="Your Name"
                        defaultValue={post.author}
                        type="text"
                        ref={(input) => this.author = input}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 form-group">
                      <textarea
                        className="form-control"
                        placeholder="Details"
                        defaultValue={post.body}
                        type="text"
                        ref={(input) => this.body = input}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <button
                        className="btn btn-danger pull-right"
                        type="button"
                        onClick={()=>{this.handleDelete(post.id)}}
                      >
                        <TrashIcon size={18} />
                      </button>
                      <Link
                        className="btn btn-default pull-right"
                        to={`/${post.category}/${post.id}`}
                      >
                        Cancel
                      </Link>
                      <input
                        className="btn btn-default pull-right"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    )
  }
}

export default PostEdit
