import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from '../components/Main'

function mapStateToProps(state) {
  return {
    processing: state.app.processing,
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer