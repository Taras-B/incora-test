import { RootState } from '../../rootReducer'
import { IPostsState, LoadingState } from './type'

const selectPostsState = (state: RootState) => state.posts

export const selectPostsItems = (state: RootState): IPostsState['posts'] =>
    selectPostsState(state).posts

export const selectPostsLoadingState = (state: RootState): LoadingState =>
    selectPostsState(state).loading

export const selectIsPostsLoading = (state: RootState): boolean =>
    selectPostsLoadingState(state) === LoadingState.LOADING

export const selectIsPostsLoaded = (state: RootState): boolean =>
    selectPostsLoadingState(state) === LoadingState.LOADED
