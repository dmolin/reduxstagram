import React from 'react'
import {Link} from 'react-router'
import Photo from '../containers/Photo'

class PhotoGrid extends React.Component {
  render () {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo post={post} key={i} />)}
      </div>
    )
  }
}

export default PhotoGrid

