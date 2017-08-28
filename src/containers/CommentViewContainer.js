import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { setCurrentComment, voteComment } from '../actions'
import CommentView from '../components/CommentView'

const mapStateToProps = ({ currentState }) => (
  { currentlyEditing: currentState.comment }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setCurrentComment, voteComment }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentView))
