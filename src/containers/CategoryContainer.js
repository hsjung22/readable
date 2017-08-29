import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import sortBy from 'sort-by'
import Category from '../components/Category'
import { toggleSort, setCurrentCategory, votePost } from '../actions'

const mapStateToProps = ({ categories, posts, sortState, currentState }) => (
  {
    categories,
    posts:
      posts
        .filter(post => (post.category === currentState.category) && !post.deleted)
        .sort(sortBy(sortState.posts)),
    sortBy: sortState.posts,
    currentCategory: currentState.category,
  }
)

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({ toggleSort, setCurrentCategory, votePost }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Category));
