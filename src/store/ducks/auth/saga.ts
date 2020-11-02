import { takeEvery, call, put } from 'redux-saga/effects'
import { userAPI } from '../../../api';
import { setAuthUser, setLoadingAuth } from './actionCreator';
import { AuthActionType, IFetchAuthUserAction, LoadingAuthState } from './type';


function* fetchAuthSaga({ payload }: IFetchAuthUserAction) {
    try {
        const user = yield call(userAPI.authPost, payload)
        window.localStorage.setItem('isAuth', JSON.stringify(user))
        yield put(setAuthUser(user))
    } catch (e) {
        console.log(e)
        yield put(setLoadingAuth(LoadingAuthState.ERROR))
    }
}



export function* sagaAuthWatcher() {
    yield takeEvery(AuthActionType.FETCH_SET_AUTH, fetchAuthSaga)
}