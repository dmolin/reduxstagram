import React from 'react'
import {Link} from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to="/">Reduxstragram</Link></h1>

        {this.props.children}
      </div>
    )
  }
}
export default Main
