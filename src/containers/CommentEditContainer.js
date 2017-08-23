import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { updateComment, setEditComment, deleteComment } from '../actions'
import CommentEdit from '../components/CommentEdit'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updateComment,
    setEditComment,
    deleteComment,
  }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(CommentEdit))
