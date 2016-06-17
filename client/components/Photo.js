import React from 'react'
import {Link} from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
  }

  increment(event) {
    event.preventDefault();
    this.props.increment(this.props.post.code)
  }
  render() {
    const {post, comments} = this.props

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`} >
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcatpion>
          <p>{post.caption}</p>

          <div className="control-buttons">
            <button className="likes" onClick={this.increment}>&hearts; {post.likes}</button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble"></span>
                &nbsp;{comments.length || ''}
              </span>
            </Link>
          </div>
        </figcatpion>
      </figure>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Photo.propTypes = {
    photo: React.PropTypes.object,
    comments: React.PropTypes.arrayOf(React.PropTypes.object)
  }
}

export default Photo