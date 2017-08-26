import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { updatePost, deletePost } from '../actions'
import PostEdit from '../components/PostEdit'

const mapStateToProps = ({ posts, categories }, props) => (
  {
    post: posts.find(post => post.id === props.match.params.id),
    categories: categories.map(category => category.name),
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updatePost, deletePost }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit))
