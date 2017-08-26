import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import sortBy from 'sort-by'
import Post from '../components/Post';
import { fetchComments, createComment } from '../actions';

const mapStateToProps = ({ posts, comments, sortState }, props) =>(
  {
    post: posts.find(post => post.id === props.id),
    comments:
      comments
        .filter(comment => !comment.deleted)
        .sort(sortBy(sortState.comments)),
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchComments, createComment }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
