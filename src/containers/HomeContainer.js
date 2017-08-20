import { connect } from 'react-redux';
import Home from '../components/Home';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ categories, posts }) => (
  {
    categories,
    posts,
  }
)

export default withRouter(connect(mapStateToProps)(Home));
