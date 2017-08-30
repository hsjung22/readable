import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import sortBy from 'sort-by'
import Category from '../components/Category'
import { toggleSort, votePost } from '../actions'

const mapStateToProps = ({ categories, posts, sortState }, props) => {
  const currentPosts =
    props.category === "all"
      ? posts
          .filter(post => !post.deleted)
          .sort(sortBy(sortState.posts))
      : posts
          .filter(post => (post.category === props.category) && !post.deleted)
          .sort(sortBy(sortState.posts))

  return (
    {
      categories: categories.map(category => category.name),
      currentPosts,
      posts: posts.filter(post => !post.deleted),
      sortBy: sortState.posts,
    }
  )
}

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({ toggleSort, votePost }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Category));
