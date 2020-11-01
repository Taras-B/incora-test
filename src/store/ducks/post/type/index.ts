import { Action } from 'redux'
import { IComment, IPost } from '../../../../type'

export interface IPostState {
    post?: IPost
    comments: IComment[]
    loading: LoadingState
}

export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
}

export enum PostActionType {
    FETCH_POST = 'post/FETCH_POST',
    SET_POST = 'post/SET_POST',
    FETCH_COMMENTS = 'post/FETCH_COMMENTS',
    SET_COMMENTS = 'post/SET_COMMENTS',
    FETCH_UPDATE_POST = 'post/FETCH_UPDATE_POST',
    UPDATE_POST = 'post/UPDATE_POST',
    SET_LOADING = 'post/SET_LOADING',
}

export interface ISetPostAction extends Action<PostActionType> {
    type: PostActionType.SET_POST
    payload: IPost
}

export interface IFetchPostAction extends Action<PostActionType> {
    type: PostActionType.FETCH_POST
    payload: number
}
//*  Comments
export interface ISetCommentsAction extends Action<PostActionType> {
    type: PostActionType.SET_COMMENTS
    payload: IComment[]
}

export interface IFetchCommentsAction extends Action<PostActionType> {
    type: PostActionType.FETCH_COMMENTS
    payload: number
}
// *interface Update post
export interface IFetchUpdatePostAction extends Action<PostActionType> {
    type: PostActionType.FETCH_UPDATE_POST
    payload: IPost
}
export interface IUpdatePostAction extends Action<PostActionType> {
    type: PostActionType.UPDATE_POST
    payload: IPost
}

export interface ISetLoadingAction extends Action<PostActionType> {
    type: PostActionType.SET_LOADING
    payload: LoadingState
}

export type PostAction =
    | ISetPostAction
    | ISetLoadingAction
    | IFetchPostAction
    | IFetchUpdatePostAction
    | IUpdatePostAction

    | ISetCommentsAction
    | IFetchCommentsAction
