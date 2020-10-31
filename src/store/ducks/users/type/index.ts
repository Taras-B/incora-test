import { Action } from "redux";
import { IUser } from "../../../../type";

export interface IUserState {
    users: IUser[]
    loading: LoadingUserState
}

export enum LoadingUserState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR'
}


export enum UsersActionType {
    FETCH_USERS = 'users/FETCH_USERS',
    SET_USERS = 'users/SET_USERS',

    SET_LOADING = 'userS/SET_LOADING',
}

export interface ISetUsersAction extends Action<UsersActionType> {
    type: UsersActionType.SET_USERS,
    payload: IUser[]
}

export interface IFetchUsersAction extends Action<UsersActionType> {
    type: UsersActionType.FETCH_USERS,
}

export interface ISetUsersLoadingAction extends Action<UsersActionType> {
    type: UsersActionType.SET_LOADING,
    payload: LoadingUserState
}


export type UsersAction = ISetUsersAction | ISetUsersLoadingAction | IFetchUsersAction