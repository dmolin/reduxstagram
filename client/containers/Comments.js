import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Comments from '../components/Comments'

function mapStateToProps(state, props) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Comments)

export default Container