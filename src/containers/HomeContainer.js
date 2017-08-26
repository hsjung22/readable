import { connect } from 'react-redux';
import Home from '../components/Home';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ categories, posts }) => (
  {
    categories,
    posts: posts.filter(post => !post.deleted),
  }
)

export default withRouter(connect(mapStateToProps)(Home));
