import { Action } from 'redux'
import { IPost } from '../../../../type'

export interface IPostsState {
  posts: IPost[]
  loading: LoadingState
}

export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export enum PostsActionType {
  FETCH_POSTS = 'posts/FETCH_POSTS',
  SET_POSTS = 'posts/SET_POSTS',
  FETCH_ADD_POST = 'posts/FETCH_ADD_POST',
  ADD_POST = 'posts/ADD_POST',
  FETCH_DELETE_POST = 'posts/FETCH_DELETE_POST',
  DELETE_POST = 'posts/DELETE_POST',
  SET_LOADING = 'posts/SET_LOADING',
}

export interface ISetPostsAction extends Action<PostsActionType> {
  type: PostsActionType.SET_POSTS
  payload: Array<IPost>
}

export interface IFetchAction extends Action<PostsActionType> {
  type: PostsActionType.FETCH_POSTS
  payload: number
}
//* interface Create post

export interface IFetchAddPostAction extends Action<PostsActionType> {
  type: PostsActionType.FETCH_ADD_POST
  payload: {
    title: string
    body: string
    userId: number
  }
}
export interface IAddPostAction extends Action<PostsActionType> {
  type: PostsActionType.ADD_POST
  payload: IPost
}

//* interface Delete post
export interface IFetchDeletePostAction extends Action<PostsActionType> {
  type: PostsActionType.FETCH_DELETE_POST
  payload: number
}
export interface IDeletePostAction extends Action<PostsActionType> {
  type: PostsActionType.DELETE_POST
  payload: number
}

export interface ISetLoadingAction extends Action<PostsActionType> {
  type: PostsActionType.SET_LOADING
  payload: LoadingState
}

export type PostsAction =
  | ISetPostsAction
  | IAddPostAction
  | ISetLoadingAction
  | IFetchAction
  | IFetchAddPostAction
  | IFetchDeletePostAction
  | IDeletePostAction
