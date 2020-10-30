import { takeEvery, call, put } from 'redux-saga/effects'
import { postsAPI } from '../../../api';
import { addPost, setLoadingPost, setPosts } from './actionCreator';
import { IFetchAction, IFetchAddPostAction, LoadingState, PostsActionType } from "./type";

function* workerFetchPostSaga({ payload }: IFetchAction) {
    try {
        const posts = yield call(postsAPI.getByUserId, payload)
        yield put(setPosts(posts))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}
function* workerAddPostSaga({ payload }: IFetchAddPostAction) {
    try {
        const post = yield call(postsAPI.create, payload.body, payload.title)
        yield put(addPost(post))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}

export function* sagaPostWatcher() {
    yield takeEvery(PostsActionType.FETCH_POSTS, workerFetchPostSaga)
    yield takeEvery(PostsActionType.FETCH_ADD_POST, workerAddPostSaga)
}