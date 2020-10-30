import { takeEvery, call, put } from 'redux-saga/effects'
import { postsAPI } from '../../../api';
import { addPost, setLoadingPost, setPosts } from './actionCreator';
import { IFetchAction, LoadingState, PostsActionType } from "./type";

function* workerFetchPostSaga({ payload }: IFetchAction) {

    try {
        const posts = yield call(postsAPI.getByUserId, payload)
        console.log(posts);

        yield put(setPosts(posts))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
    // yield put(addPost({ body: 'string3', userId: 1, id: 2, title: 'title3' }))
}
function* workerAddPostSaga({ payload }: IFetchAction) {

    try {
        const posts = yield call(postsAPI.getByUserId, payload)
        console.log(posts);

        yield put(setPosts(posts))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
    // yield put(addPost({ body: 'string3', userId: 1, id: 2, title: 'title3' }))
}

export function* sagaPostWatcher() {
    yield takeEvery(PostsActionType.FETCH_POSTS, workerFetchPostSaga)
    yield takeEvery(PostsActionType.ADD_POST, workerAddPostSaga)
}