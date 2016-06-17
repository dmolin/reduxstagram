import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Photo from '../components/Photo'

function mapStateToProps(state, props) {
  return {
    comments: state.comments[props.post.code] || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Photo)

export default Container