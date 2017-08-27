import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import sortBy from 'sort-by'
import Home from '../components/Home';
import { toggleSort } from '../actions'

const mapStateToProps = ({ categories, posts, sortState }) => (
  {
    categories,
    posts:
      posts
        .filter(post => !post.deleted)
        .sort(sortBy(sortState.posts)),
  }
)

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({ toggleSort }, dispatch)
)


export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Home));
