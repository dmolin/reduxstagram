import React from 'react'

export default class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  remove() {
    this.props.remove(this.props.index)
  }

  render() {
    const {user, text, index} = this.props
    return <div className="comment" key={index}>
      <p>
        <strong>{user}</strong>
        {text}
        <button onClick={this.remove} className="remove-comment">&times; </button>
      </p>
    </div>
  }
}