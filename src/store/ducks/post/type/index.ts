import { Action } from "redux";
import { IPost } from "../../../../type";

export interface IPostState {
    post?: IPost
    loading: LoadingState
}

export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR'
}


export enum PostActionType {
    FETCH_POST = 'post/FETCH_POST',
    SET_POST = 'post/SET_POST',
    FETCH_UPDATE_POST = 'post/FETCH_UPDATE_POST',
    UPDATE_POST = 'post/UPDATE_POST',
    FETCH_DELETE_POST = 'post/FETCH_DELETE_POST',
    DELETE_POST = 'post/DELETE_POST',
    SET_LOADING = 'post/SET_LOADING',
}

export interface ISetPostAction extends Action<PostActionType> {
    type: PostActionType.SET_POST,
    payload: IPost
}

export interface IFetchPostAction extends Action<PostActionType> {
    type: PostActionType.FETCH_POST,
    payload: number

}
// interface Update post
export interface IFetchUpdatePostAction extends Action<PostActionType> {
    type: PostActionType.FETCH_UPDATE_POST,
    payload: IPost
}
export interface IUpdatePostAction extends Action<PostActionType> {
    type: PostActionType.UPDATE_POST,
    payload: IPost
}
// interface Delete post
export interface IFetchDeletePostAction extends Action<PostActionType> {
    type: PostActionType.FETCH_DELETE_POST,
    payload: number
}
export interface IDeletePostAction extends Action<PostActionType> {
    type: PostActionType.DELETE_POST,
    payload: number
}


export interface ISetLoadingAction extends Action<PostActionType> {
    type: PostActionType.SET_LOADING,
    payload: LoadingState
}


export type PostAction = ISetPostAction | ISetLoadingAction | IFetchPostAction | IFetchUpdatePostAction | IUpdatePostAction | IFetchDeletePostAction | IDeletePostAction