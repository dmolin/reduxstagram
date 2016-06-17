import {addCommentWatcher, removeCommentWatcher} from './commentsWatchers'

export default function* rootSaga() {
  yield [
    addCommentWatcher(),
    removeCommentWatcher()
  ]
}