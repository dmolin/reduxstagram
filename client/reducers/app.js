const initialState = {
  processing: false
}

function comments(state = initialState, action) {
  const {type, postCode} = action
  switch(type) {
    case 'ADD_COMMENT_STARTED':
    case 'REMOVE_COMMENT_STARTED':
      return Object.assign({}, state, {processing: true})

    case 'ADD_COMMENT_COMPLETED':
    case 'REMOVE_COMMENT_COMPLETED':
      return Object.assign({}, state, {processing: false})
  }
  return state
}
export default comments