import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import sortBy from 'sort-by'
import Category from '../components/Category'

const mapStateToProps = ({ posts, sortState }, props) => (
  {
    posts:
      posts
        .filter(post => (post.category === props.name) && !post.deleted)
        .sort(sortBy(sortState.posts)),
  }
)

export default withRouter(connect(mapStateToProps)(Category));
