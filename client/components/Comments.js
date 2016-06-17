import React from 'react'
import Comment from './Comment'

export default class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.addComment = this.addComment.bind(this)
    this.removeComment = this.removeComment.bind(this)
  }
  
  addComment(event) {
    event.preventDefault()
    
    const {code} = this.props,
          author = this.refs.author.value,
          comment = this.refs.comment.value
    
    this.props.addComment(code, author, comment)
    this.refs.commentForm.reset()
    this.refs.author.focus()
  }

  removeComment(index) {
    const {code} = this.props
    console.log('remove comment ' + index)
    
    this.props.removeComment(code, index)
  }
  
  renderComment(comment, i) {
    return <Comment {...comment} key={i} index={i} remove={this.removeComment} />
  }

  render() {
    const {comments} = this.props

    return (
      <div className="comments">
        {comments.map(this.renderComment.bind(this))}

        <form className="comment-form" ref="commentForm" onSubmit={this.addComment}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}