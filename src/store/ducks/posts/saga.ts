import { takeEvery, call, put } from 'redux-saga/effects'
import { postsAPI } from '../../../api'
import { addPost, deletePost, setLoadingPost, setPosts } from './actionCreator'
import {
    IFetchAction,
    IFetchAddPostAction,
    IFetchDeletePostAction,
    LoadingState,
    PostsActionType,
} from './type'

function* fetchPostsSaga({ payload }: IFetchAction) {
    try {
        const posts = yield call(postsAPI.getByUserId, payload)
        yield put(setPosts(posts))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}
function* addPostSaga({ payload }: IFetchAddPostAction) {
    try {
        const post = yield call(postsAPI.create, payload.title, payload.body)

        yield put(addPost(post))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}
function* deletePostSaga({ payload }: IFetchDeletePostAction) {
    try {
        const status = yield call(postsAPI.delete, payload)

        if (status === 200) {
            yield put(deletePost(payload))
        }
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(LoadingState.ERROR))
    }
}

export function* sagaPostsWatcher() {
    yield takeEvery(PostsActionType.FETCH_POSTS, fetchPostsSaga)
    yield takeEvery(PostsActionType.FETCH_ADD_POST, addPostSaga)
    yield takeEvery(PostsActionType.FETCH_DELETE_POST, deletePostSaga)
}
