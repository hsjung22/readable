import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { fetchCategories } from '../actions';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchCategories }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);