import React, { Component } from 'react'

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
      <div>
        {post &&
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  ref={(input) => this.title = input}
                  defaultValue={post.title}
                />
              </label>
              <label>
                Body:
                <input
                  type="text"
                  ref={(input) => this.body = input}
                  defaultValue={post.body}
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  ref={(input) => this.author = input}
                  defaultValue={post.author}
                />
              </label>
              <label>
                Category:
                <select defaultValue={post.category} ref={(input) => this.category = input}>
                  {this.props.categories.map((category, index) =>
                    <option key={index} value={category}>{category}</option>
                  )}
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
            <button onClick={()=>{this.handleDelete(post.id)}}>delete</button>
          </div>
        }
      </div>
    )
  }
}

export default PostEdit
