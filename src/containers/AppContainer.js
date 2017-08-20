import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { fetchCategories } from '../actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ categories }) => (
  { categories }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchCategories }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
