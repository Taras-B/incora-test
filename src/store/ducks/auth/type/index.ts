import { Action } from 'redux'
import { SignInFormData } from '../../../../pages/SignIn'

export interface IAuthUser {
    id: number
    username: string
    password: string
}

export interface IAuthState {
    isAuth: boolean
    user?: IAuthUser
    loading: LoadingAuthState
}

export enum LoadingAuthState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
}

export enum AuthActionType {
    FETCH_SET_AUTH = 'auth/FETCH_SET_AUTH',
    SET_AUTH = 'auth/SET_AUTH',
    SET_LOGOUT = 'auth/SET_LOGOUT',
    CURRENT_AUTH = 'auth/CURRENT_AUTH',
    SET_LOADING = 'auth/SET_LOADING',
}

export interface ISetAuthAction extends Action<AuthActionType> {
    type: AuthActionType.SET_AUTH
    payload: IAuthUser
}
export interface ISetLogoutAction extends Action<AuthActionType> {
    type: AuthActionType.SET_LOGOUT
}
export interface ICurrentAuthAction extends Action<AuthActionType> {
    type: AuthActionType.CURRENT_AUTH
    payload: IAuthUser
}

export interface IFetchAuthUserAction extends Action<AuthActionType> {
    type: AuthActionType.FETCH_SET_AUTH,
    payload: SignInFormData
}

export interface ISetAuthLoadingAction extends Action<AuthActionType> {
    type: AuthActionType.SET_LOADING
    payload: LoadingAuthState
}

export type AuthAction = ISetAuthAction | ISetLogoutAction | ISetAuthLoadingAction | IFetchAuthUserAction | ICurrentAuthAction
