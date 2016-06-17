import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import serverApi from '../../mocks/serverApi'

export function* addCommentWatcher() {
  yield* takeEvery('ADD_COMMENT_STARTED', function* (action) {
    const {postCode, author, comment} = action

    try {
      const data = yield call(serverApi.addComment, postCode, author, comment)
      //dispatch completion action
      yield put({type: 'ADD_COMMENT_COMPLETED', postCode: postCode, comments: data})
    } catch(error) {
      //we can dispatch a 'error-message' action that can set
      //an error message in the state tree and trigger a popup in the UI
    }
  })
}

export function* removeCommentWatcher() {
  yield* takeEvery('REMOVE_COMMENT_STARTED', function* (action) {
    const {postCode, commentIndex} = action

    try {
      const data = yield call(serverApi.removeComment, postCode, commentIndex)
      //dispatch completion action
      yield put({type: 'REMOVE_COMMENT_COMPLETED', postCode: postCode, comments: data})
    } catch(error) {
      //we can dispatch a 'error-message' action that can set
      //an error message in the state tree and trigger a popup in the UI
    }
  })
}