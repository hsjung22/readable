import { connect } from 'react-redux';
import Category from '../components/Category';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ posts }, props) =>(
  { posts: posts.filter(post => post.category === props.name) }
)

export default withRouter(connect(mapStateToProps)(Category));
