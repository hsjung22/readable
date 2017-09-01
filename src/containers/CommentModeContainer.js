import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentMode from '../components/CommentMode'

const mapStateToProps = ({ currentState }) => (
  { editCommentId: currentState.comment }
)

export default withRouter(connect(mapStateToProps)(CommentMode));
