import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import sortBy from 'sort-by'
import Home from '../components/Home';

const mapStateToProps = ({ categories, posts, sortState }) => (
  {
    categories,
    posts:
      posts
        .filter(post => !post.deleted)
        .sort(sortBy(sortState.posts)),
  }
)

export default withRouter(connect(mapStateToProps)(Home));
