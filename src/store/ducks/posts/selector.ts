import { RootState } from '../../rootReducer'
import { IPostsState, LoadingState } from './type'

const selectPostsState = (state: RootState) => state.posts

export const selectPostsItems = (state: RootState): IPostsState['posts'] =>
    selectPostsState(state).posts

export const selectUserLoadingState = (state: RootState): LoadingState =>
    selectPostsState(state).loading

export const selectIsPostsLoading = (state: RootState): boolean =>
    selectUserLoadingState(state) === LoadingState.LOADING

export const selectIsPostsLoaded = (state: RootState): boolean =>
    selectUserLoadingState(state) === LoadingState.LOADED
