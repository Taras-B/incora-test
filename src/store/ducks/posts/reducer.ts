import produce, { Draft } from 'immer'
import { IPostsState, LoadingState, PostsAction, PostsActionType } from './type'

const initialPostsState: IPostsState = {
    posts: [],
    loading: LoadingState.LOADED,
}

export const postsReducer = produce((draft: Draft<IPostsState>, action: PostsAction) => {
    switch (action.type) {
        case PostsActionType.FETCH_POSTS:
            draft.posts = []
            draft.loading = LoadingState.LOADING
            break
        case PostsActionType.SET_POSTS:
            draft.posts = action.payload
            draft.loading = LoadingState.LOADED
            break
        case PostsActionType.FETCH_ADD_POST:
            draft.loading = LoadingState.LOADING
            break
        case PostsActionType.ADD_POST:
            draft.posts.push(action.payload)
            draft.loading = LoadingState.LOADED
            break
        case PostsActionType.FETCH_DELETE_POST:
            draft.loading = LoadingState.LOADING
            break
        case PostsActionType.DELETE_POST:
            const index = draft.posts.findIndex((post) => post.id === action.payload)
            if (index !== -1) draft.posts.splice(index, 1)
            draft.loading = LoadingState.LOADED
            break
        case PostsActionType.SET_LOADING:
            draft.loading = action.payload
            break

        default:
            break
    }
}, initialPostsState)
