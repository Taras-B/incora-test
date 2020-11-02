import { Action } from 'redux'

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
    SET_LOADING = 'auth/SET_LOADING',
}

export interface ISetAuthAction extends Action<AuthActionType> {
    type: AuthActionType.SET_AUTH
    payload: boolean
}

export interface IFetchAuthUserAction extends Action<AuthActionType> {
    type: AuthActionType.FETCH_SET_AUTH,
    payload: {
        username: string
        password: string
    }
}

export interface ISetAuthLoadingAction extends Action<AuthActionType> {
    type: AuthActionType.SET_LOADING
    payload: LoadingAuthState
}

export type AuthAction = ISetAuthAction | ISetAuthLoadingAction | IFetchAuthUserAction
