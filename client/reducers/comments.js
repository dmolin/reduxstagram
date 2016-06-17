const commentsInitialState = {}
const commentInitialState = []

function postComments(state = commentInitialState, action) {
  const {type, postCode} = action
  switch(type) {
    case 'ADD_COMMENT':
      const {author, comment} = action
      return [...state, {text:comment, user:author}]
    case 'REMOVE_COMMENT':
      const {commentIndex} = action
      return [...state.slice(0, commentIndex), ...state.slice(commentIndex+1)]
  }
  return state
}

function comments(state = commentsInitialState, action) {
  const {type, postCode} = action
  switch(type) {
    case 'ADD_COMMENT':
    case 'REMOVE_COMMENT':
      state = {
        ...state,
        [postCode]: postComments(state[postCode], action)
      }
      return state
  }
  return state
}

export default comments