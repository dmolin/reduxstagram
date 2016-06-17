import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import serverApi from '../../mocks/serverApi'

export function* loadDataWatcher() {
  yield* takeEvery('LOAD_DATA_STARTED', function* (action) {
    try {
      const data = yield call(serverApi.loadData)
      //dispatch completion action
      yield put({type: 'LOAD_DATA_COMPLETED', data})
    } catch(error) {
      //we can dispatch a 'error-message' action that can set
      //an error message in the state tree and trigger a popup in the UI
    }
  })
}
