import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Single from '../components/Single'

function mapStateToProps(state, props) {
  const post = props.post || state.posts.find(post => post.code === props.params.postId)
  const code = (post && post.code) || props.params.postId
  const comments = (post && code ? state.comments[code] : []) || []

  return {
    post,
    comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Single)

export default Container