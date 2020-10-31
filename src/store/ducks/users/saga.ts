import { takeEvery, call, put } from 'redux-saga/effects'
import { userAPI } from '../../../api';
import { setLoadingUsers, setUsers } from './actionCreator';
import { LoadingUserState, UsersActionType } from './type';

function* fetchUsersSaga() {
    try {
        const users = yield call(userAPI.getAll)
        yield put(setUsers(users))
    } catch (e) {
        console.log(e)
        yield put(setLoadingUsers(LoadingUserState.ERROR))
    }
}



export function* sagaUserWatcher() {
    yield takeEvery(UsersActionType.FETCH_USERS, fetchUsersSaga)
}