import { connect } from 'react-redux';
import Post from '../components/Post';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ posts }, props) =>(
  { post: posts.filter(post => post.id === props.id)[0] }
)

export default withRouter(connect(mapStateToProps)(Post));
