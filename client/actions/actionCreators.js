// initial load
export function loadData() {
  return {
    type: 'LOAD_DATA_STARTED'
  }
}

export function loadDataCompleted(data) {
  return {
    type: 'LOAD_DATA_COMPLETED',
    data
  }
}

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
    type: 'ADD_COMMENT_STARTED',
    postCode,
    author,
    comment
  }
}

export function addCommentCompleted(postCode, comments) {
  return {
    type: 'ADD_COMMENT_COMPLETED',
    postCode,
    comments
  }
}

// remove comment
export function removeComment(postCode, commentIndex) {
  return {
    type: 'REMOVE_COMMENT_STARTED',
    postCode,
    commentIndex
  }
}

export function removeCommentCompleted(postCode, commentIndex) {
  console.log("remove completed")
  return {
    type: 'REMOVE_COMMENT_COMPLETED',
    postCode,
    commentIndex
  }
}