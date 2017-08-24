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
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            ref={(input) => this.title = input}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            ref={(input) => this.body = input}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            ref={(input) => this.author = input}
          />
        </label>
        <label>
          Category:
          <select ref={(input) => this.category = input}>
            {this.props.categories.map((category, index) =>
              <option key={index} value={category}>{category}</option>
            )}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default PostNew
