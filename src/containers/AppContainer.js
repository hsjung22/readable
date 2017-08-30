import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom'
import { fetchDefaults } from '../actions';

const mapStateToProps = ({ categories, posts }) => (
  {
    categories,
    posts: posts.filter(post => !post.deleted),
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchDefaults }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
