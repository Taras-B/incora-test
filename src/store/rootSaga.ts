import { all } from "redux-saga/effects";
import { sagaPostWatcher } from "./ducks/post/saga";
import { sagaPostsWatcher } from "./ducks/posts/saga";


export function* rootSaga() {
    yield all([sagaPostWatcher(), sagaPostsWatcher()])
}