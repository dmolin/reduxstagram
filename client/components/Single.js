import React from 'react'
import Photo from '../containers/Photo'
import Comments from '../containers/Comments'

class Single extends React.Component {
  renderPost() {
    return this.props.post ? <Photo post={this.props.post} /> : <p>No Photo was found with the given code</p>
  }
  render () {
    const {post, comments} = this.props
    
    return (
      <div className="single-photo">
        {this.renderPost()}

        <Comments code={post.code} comments={comments}/>
      </div>
    )
  }
}

export default Single

