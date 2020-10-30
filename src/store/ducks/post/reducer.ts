import produce, { Draft } from "immer"
import { IPostState, LoadingState, PostAction, PostActionType } from "./type"

const initialPostsState: IPostState = {
    post: undefined,
    loading: LoadingState.LOADED
}

export const postReducer = produce((draft: Draft<IPostState>, action: PostAction) => {
    switch (action.type) {
        case PostActionType.FETCH_POST:
            draft.post = undefined
            draft.loading = LoadingState.LOADING
            break
        case PostActionType.SET_POST:
            draft.post = action.payload
            draft.loading = LoadingState.LOADED
            break
        case PostActionType.FETCH_UPDATE_POST:
            draft.loading = LoadingState.LOADING
            break
        case PostActionType.UPDATE_POST:
            draft.post = action.payload
            draft.loading = LoadingState.LOADED
            break
        case PostActionType.FETCH_DELETE_POST:
            draft.loading = LoadingState.LOADING
            break
        case PostActionType.SET_LOADING:
            draft.loading = action.payload
            break

        default:
            break

    }
}, initialPostsState)