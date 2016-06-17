import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import PhotoGrid from '../components/PhotoGrid'

function mapStateToProps(state, props) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators(actionCreators, dispatch)
  return bindActionCreators({}, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid)

export default Container