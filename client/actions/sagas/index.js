import {addCommentWatcher, removeCommentWatcher} from './commentsWatchers'
import {loadDataWatcher} from './dataWatcher'

export default function* rootSaga() {
  yield [
    addCommentWatcher(),
    removeCommentWatcher(),
    loadDataWatcher()
  ]
}