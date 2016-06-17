const initialState = {
  processing: false
}

function comments(state = {}, action) {
  const {type, postCode} = action
  switch(type) {
    case 'LOAD_DATA_COMPLETED':
      return action.data.comments
    case 'ADD_COMMENT_COMPLETED':
    case 'REMOVE_COMMENT_COMPLETED':
      return {
        ...state,
        [postCode]: action.comments
      }
  }
  return state
}
export default comments