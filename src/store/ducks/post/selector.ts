import { RootState } from '../../rootReducer'
import { IPostState, LoadingState } from './type'

const selectPostState = (state: RootState) => state.post

export const selectPostItem = (state: RootState): IPostState['post'] =>
    selectPostState(state).post
export const selectCommentsItems = (state: RootState): IPostState['comments'] =>
    selectPostState(state).comments

export const selectPostLoadingState = (state: RootState): LoadingState =>
    selectPostState(state).loading

export const selectIsPostLoading = (state: RootState): boolean =>
    selectPostLoadingState(state) === LoadingState.LOADING

export const selectIsPostLoaded = (state: RootState): boolean =>
    selectPostLoadingState(state) === LoadingState.LOADED
