import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import sortBy from 'sort-by'
import Category from '../components/Category'
import { toggleSort } from '../actions'

const mapStateToProps = ({ posts, sortState }, props) => (
  {
    posts:
      posts
        .filter(post => (post.category === props.name) && !post.deleted)
        .sort(sortBy(sortState.posts)),
  }
)

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({ toggleSort }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Category));
