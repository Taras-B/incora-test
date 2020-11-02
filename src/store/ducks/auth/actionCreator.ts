import { SignInFormData } from '../../../pages/SignIn'
import {
    AuthActionType,
    ISetAuthAction,
    LoadingAuthState,
    ISetAuthLoadingAction,
    IFetchAuthUserAction,
    IAuthUser,
    ICurrentAuthAction,
    ISetLogoutAction
} from './type'

export const setLoadingAuth = (payload: LoadingAuthState): ISetAuthLoadingAction => ({
    type: AuthActionType.SET_LOADING,
    payload,
})
export const fetchAuthUser = (payload: SignInFormData): IFetchAuthUserAction => ({
    type: AuthActionType.FETCH_SET_AUTH,
    payload
})
export const setAuthUser = (payload: IAuthUser): ISetAuthAction => ({
    type: AuthActionType.SET_AUTH,
    payload,
})
export const setLogoutUser = (): ISetLogoutAction => ({
    type: AuthActionType.SET_LOGOUT,
})
export const isCurrentAuthUser = (payload: IAuthUser): ICurrentAuthAction => ({
    type: AuthActionType.CURRENT_AUTH,
    payload,
})
