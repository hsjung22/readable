import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import Post from '../components/Post';
import { fetchComments, createComment } from '../actions';

const mapStateToProps = ({ posts, comments }, props) =>(
  {
    post: posts.find(post => post.id === props.id),
    comments: comments.filter(comment => !comment.deleted)
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchComments, createComment }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
