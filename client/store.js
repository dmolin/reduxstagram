import {createStore, compose, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'
import rootSaga from './actions/sagas'

//these should be retrieved through the serverApi
//since we're mocking only add/remove comment we leave them here for the moment.
import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware
]

const enhancers = compose(
  applyMiddleware(...middlewares),
  process.env.NODE_ENV === 'production' ? f => f :
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)
//run saga watchers
sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
  module.hot.accept(['./reducers/'], () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}
export default store