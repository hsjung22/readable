import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import Post from '../components/Post';
import { fetchComments, postComment } from '../actions';

const mapStateToProps = ({ posts, comments }, props) =>(
  {
    post: posts.filter(post => post.id === props.id)[0],
    comments: comments.filter(comment => !comment.deleted)
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchComments, postComment }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
