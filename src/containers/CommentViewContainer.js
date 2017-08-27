import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { setEditComment, voteComment } from '../actions'
import CommentView from '../components/CommentView'

const mapStateToProps = ({ editState }) => (
  { currentlyEditing: editState.comment }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setEditComment, voteComment }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentView))
