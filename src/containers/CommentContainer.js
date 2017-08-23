import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Comment from '../components/Comment'

const mapStateToProps = ({ editState }) => (
  { editCommentId: editState.comment }
)

export default withRouter(connect(mapStateToProps)(Comment));
