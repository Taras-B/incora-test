import { IComment, IPost } from "../../../type";
import {

    IFetchCommentsAction,
    IFetchPostAction,
    IFetchUpdatePostAction,
    ISetCommentsAction,
    ISetLoadingAction,
    ISetPostAction,
    IUpdatePostAction,
    LoadingState,
    PostActionType,
} from './type'

export const setLoadingPost = (payload: LoadingState): ISetLoadingAction => ({
    type: PostActionType.SET_LOADING,
    payload
})
export const fetchPost = (postId: number): IFetchPostAction => ({
    type: PostActionType.FETCH_POST,
    payload: postId
})
export const setPost = (payload: IPost): ISetPostAction => ({
    type: PostActionType.SET_POST,
    payload
})
export const fetchComments = (postId: number): IFetchCommentsAction => ({
    type: PostActionType.FETCH_COMMENTS,
    payload: postId
})
export const setComments = (payload: IComment[]): ISetCommentsAction => ({
    type: PostActionType.SET_COMMENTS,
    payload
})
export const fetchUpdatePost = (payload: IPost): IFetchUpdatePostAction => ({
    type: PostActionType.FETCH_UPDATE_POST,
    payload
})
export const updatePost = (payload: IPost): IUpdatePostAction => ({
    type: PostActionType.UPDATE_POST,
    payload
})

