import React from 'react'
import {render} from 'react-dom'
import Main from './containers/Main'
import Single from './containers/Single'
import PhotoGrid from './containers/PhotoGrid'
import store, {history} from './store'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import css from './styles/style.styl'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single} ></Route>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))
