import React from 'react'
import {Link} from 'react-router'

class Main extends React.Component {
  componentDidMount() {
    this.props.loadData()  
  }
  
  renderSpinnerIfProcessing() {
    const {processing} = this.props
    
    return processing ? 
      <div className="loading-spinner-backdrop">
        <div className="loading-spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>  
      : null      
  }
  
  render() {
    return (
      <div>
        {this.renderSpinnerIfProcessing()}        
        <h1><Link to="/">Reduxstragram</Link></h1>

        {this.props.children}
      </div>
    )
  }
}
export default Main
