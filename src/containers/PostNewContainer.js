import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { createPost } from '../actions'
import PostNew from '../components/PostNew'

const mapStateToProps = ({ categories }) => (
  { categories: categories.map(category => category.name) }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ createPost }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostNew))
