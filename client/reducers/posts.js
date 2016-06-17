const initialState = []

function posts(state = initialState, action) {
  const {type, postCode} = action
  switch(type) {
    case 'LOAD_DATA_COMPLETED':
      return action.data.posts
    
    case 'INCREMENT_LIKES':
      state = state.map(post => {
        return post.code === postCode ? Object.assign({}, post, {likes: post.likes+1}) : post
      })
      console.log(`Incremented likes for post ${postCode}. likes=${state.find(i => i.code === postCode).likes}`)
      break;
  }
  return state
}

export default posts
