import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import sortBy from 'sort-by'
import Comment from '../components/Comment'
import {
  toggleSort,
  fetchComments,
  createComment,
} from '../actions';

const mapStateToProps = ({ comments, sortState }, props) => {
  return (
    {
      comments:
        comments
          .filter(comment => !comment.deleted)
          .sort(sortBy(sortState.comments)),
      sortBy: sortState.comments,
    }
  )
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    toggleSort,
    fetchComments,
    createComment,
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment))
