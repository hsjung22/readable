import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { updateComment, setEditComment } from '../actions'
import CommentEdit from '../components/CommentEdit'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ updateComment, setEditComment }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(CommentEdit))
