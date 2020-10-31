import { IPost } from "../../../type";
import { IAddPostAction, IFetchAction, IFetchAddPostAction, ISetLoadingAction, ISetPostsAction, LoadingState, PostsActionType } from "./type";

export const fetchPosts = (userId: number): IFetchAction => ({
    type: PostsActionType.FETCH_POSTS,
    payload: userId
})
export const setLoadingPost = (payload: LoadingState): ISetLoadingAction => ({
    type: PostsActionType.SET_LOADING,
    payload
})
export const setPosts = (payload: Array<IPost>): ISetPostsAction => ({
    type: PostsActionType.SET_POSTS,
    payload
})
export const fetchAddPost = (payload: { title: string, body: string }): IFetchAddPostAction => ({
    type: PostsActionType.FETCH_ADD_POST,
    payload
})
export const addPost = (payload: IPost): IAddPostAction => ({
    type: PostsActionType.ADD_POST,
    payload
})
