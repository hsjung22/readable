import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import sortBy from 'sort-by'
import Home from '../components/Home';
import { toggleSort, setCurrentCategory } from '../actions'

const mapStateToProps = ({ categories, posts, sortState, currentState }) => (
  {
    categories,
    posts:
      posts
        .filter(post => !post.deleted)
        .sort(sortBy(sortState.posts)),
    sortBy: sortState.posts,
    currentCategory: currentState.category,
  }
)

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({ toggleSort, setCurrentCategory }, dispatch)
)


export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Home));
