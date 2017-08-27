import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { setEditComment, voteComment } from '../actions'
import CommentView from '../components/CommentView'

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setEditComment, voteComment }, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(CommentView))
