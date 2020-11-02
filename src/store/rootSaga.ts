import { all } from 'redux-saga/effects'
import { sagaAuthWatcher } from './ducks/auth/saga'
import { sagaPostWatcher } from './ducks/post/saga'
import { sagaPostsWatcher } from './ducks/posts/saga'
import { sagaUserWatcher } from './ducks/users/saga'

export function* rootSaga() {
  yield all([sagaPostWatcher(), sagaPostsWatcher(), sagaUserWatcher(), sagaAuthWatcher()])
}
