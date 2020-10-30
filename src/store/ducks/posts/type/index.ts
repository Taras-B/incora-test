import { Action } from "redux";
import { IPost } from "../../../../type";

export interface IPostsState {
    posts: IPost[]
    loading: LoadingState
}

export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR'
}

export enum PostsActionType {
    FETCH_POSTS = 'posts/FETCH_POSTS',
    SET_POSTS = 'posts/SET_POSTS',
    ADD_POST = 'posts/ADD_POST',
    SET_LOADING = 'posts/SET_LOADING',
}

export interface ISetPostsAction extends Action<PostsActionType> {
    type: PostsActionType.SET_POSTS,
    payload: Array<IPost>
}

export interface IAddPostAction extends Action<PostsActionType> {
    type: PostsActionType.ADD_POST,
    payload: IPost
}
export interface IFetchAction extends Action<PostsActionType> {
    type: PostsActionType.FETCH_POSTS,
    payload: number

}
export interface ISetLoadingAction extends Action<PostsActionType> {
    type: PostsActionType.SET_LOADING,
    payload: LoadingState
}


export type PostsAction = ISetPostsAction | IAddPostAction | ISetLoadingAction | IFetchAction