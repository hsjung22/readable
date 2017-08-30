import React, { Component } from 'react'

class PostNew extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createPost({
      title: this.title.value,
      body: this.body.value,
      author: this.author.value,
      category: this.category.value,
    })
      .then(({ post }) => {
        // redirect to the newly created post's page
        this.props.history.push(`/${post.category}/${post.id}`)
      })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-12 form-group">
                  <input
                    className="form-control"
                    placeholder="Title"
                    type="text"
                    ref={(input) => this.title = input}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 form-group">
                  <textarea
                    className="form-control"
                    placeholder="Details"
                    type="text"
                    ref={(input) => this.body = input}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-8 form-group">
                  <input
                    className="form-control"
                    placeholder="Your Name"
                    type="text"
                    ref={(input) => this.author = input}
                  />
                </div>
                <div className="col-xs-4 form-group">
                  <select
                    className="form-control"
                    ref={(input) => this.category = input}
                    defaultValue="default"
                  >
                    <option value="default" disabled>Select a category</option>
                    {this.props.categories.map((category, index) =>
                      <option key={index} value={category}>{category}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="row">
                <div className="col-xs-12">
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
    )
  }
}

export default PostNew
