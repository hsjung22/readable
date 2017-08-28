import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Comment from '../components/Comment'

const mapStateToProps = ({ currentState }) => (
  { editCommentId: currentState.comment }
)

export default withRouter(connect(mapStateToProps)(Comment));
