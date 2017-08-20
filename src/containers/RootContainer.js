import { connect } from 'react-redux';
import Root from '../components/Root';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ categories }) => (
  { categories }
)

export default withRouter(connect(mapStateToProps)(Root));
