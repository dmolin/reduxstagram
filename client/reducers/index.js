import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import app from './app'
import posts from './posts'
import comments from './comments'

const rootReducer = combineReducers({
  app,
  posts,
  comments,
  routing: routerReducer
})

export default rootReducer