import { takeEvery, call, put } from 'redux-saga/effects'
import { postsAPI } from '../../../api';
import { setLoadingPost, setPost, updatePost } from './actionCreator';
import { IFetchPostAction, IFetchUpdatePostAction, LoadingState, PostActionType } from "./type";

function* workerFetchPostSaga({ payload }: IFetchPostAction) {
    try {
        const post = yield call(postsAPI.getByUserId, payload)
        yield put(setPost(post))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}

function* workerUpdatePostSaga({ payload }: IFetchUpdatePostAction) {
    try {
        const post = yield call(postsAPI.update, payload)
        yield put(updatePost(post))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}

export function* sagaPostWatcher() {
    yield takeEvery(PostActionType.FETCH_POST, workerFetchPostSaga)
    yield takeEvery(PostActionType.FETCH_UPDATE_POST, workerUpdatePostSaga)
}