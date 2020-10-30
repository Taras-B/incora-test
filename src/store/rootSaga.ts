import { all } from "redux-saga/effects";
import { sagaPostWatcher } from "./ducks/posts/saga";


export function* rootSaga() {
    yield all([sagaPostWatcher()])
}