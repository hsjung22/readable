import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Category from '../components/Category'

const mapStateToProps = ({ posts }, props) => (
  { posts: posts.filter(post => post.category === props.name) }
)

export default withRouter(connect(mapStateToProps)(Category));
