import {
    AuthActionType,
    ISetAuthAction,
    LoadingAuthState,
    ISetAuthLoadingAction,
    IFetchAuthUserAction
} from './type'

export const setLoadingAuth = (payload: LoadingAuthState): ISetAuthLoadingAction => ({
    type: AuthActionType.SET_LOADING,
    payload,
})
export const fetchAuthUser = (payload: {
    username: string,
    password: string
}): IFetchAuthUserAction => ({
    type: AuthActionType.FETCH_SET_AUTH,
    payload
})
export const setAuthUser = (payload: boolean): ISetAuthAction => ({
    type: AuthActionType.SET_AUTH,
    payload,
})
