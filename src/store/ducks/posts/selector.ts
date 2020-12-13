import { createSelector } from 'reselect'
import { RootState } from '../../rootReducer'
import { IPostsState, LoadingState } from './type'

const selectPostsState = (state: RootState) => state.posts

export const selectPostsItems = (state: RootState): IPostsState['posts'] =>
  selectPostsState(state).posts

export const reselectPostsItems = createSelector(selectPostsState, (posts) => posts.posts)

export const selectPostsLoadingState = createSelector(
  selectPostsState,
  (posts) => posts.loading
)

export const selectIsPostsLoading = (state: RootState): boolean =>
  selectPostsLoadingState(state) === LoadingState.LOADING

export const selectIsPostsLoaded = (state: RootState): boolean =>
  selectPostsLoadingState(state) === LoadingState.LOADED
