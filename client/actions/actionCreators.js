// increment like
export function increment(postCode) {
  return {
    type: 'INCREMENT_LIKES',
    postCode: postCode
  }
}

// add comment
export function addComment(postCode, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postCode,
    author,
    comment
  }
}

// remove comment
export function removeComment(postCode, commentIndex) {
  return {
    type: 'REMOVE_COMMENT',
    postCode,
    commentIndex
  }
}