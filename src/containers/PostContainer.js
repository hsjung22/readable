import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import Post from '../components/Post';
import { votePost } from '../actions';

const mapStateToProps = ({ posts }, props) => (
  { post: posts.find(post => post.id === props.postId) }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ votePost }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
