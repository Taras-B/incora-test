import { createSelector } from 'reselect'
import { RootState } from '../../rootReducer'
import { IPostState, LoadingState } from './type'

const selectPostState = (state: RootState) => state.post

export const selectPostItem = createSelector(
  selectPostState,
  (postState: IPostState) => postState.post
)
export const selectCommentsItems = createSelector(
  selectPostState,
  (postState) => postState.comments
)

export const selectPostLoadingState = createSelector(
  selectPostState,
  (postState) => postState.loading
)

// export const selectPostLoadingState = (state: RootState): LoadingState =>
//   selectPostState(state).loading

export const selectIsPostLoading = (state: RootState): boolean =>
  selectPostLoadingState(state) === LoadingState.LOADING

export const selectIsPostLoaded = (state: RootState): boolean =>
  selectPostLoadingState(state) === LoadingState.LOADED
