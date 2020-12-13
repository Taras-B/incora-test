import { createSelector } from 'reselect'
import { RootState } from '../../rootReducer'
import { IUserState, LoadingUserState } from './type'

const selectUsersState = (state: RootState) => state.users

export const selectUsersItems = createSelector(
  selectUsersState,
  (userState: IUserState) => userState.users
)
export const selectUserLoadingState = createSelector(
  selectUsersState,
  (userState: IUserState) => userState.loading
)

export const selectIsUsersLoading = (state: RootState): boolean =>
  selectUserLoadingState(state) === LoadingUserState.LOADING
export const selectIsUsersLoaded = (state: RootState): boolean =>
  selectUserLoadingState(state) === LoadingUserState.LOADED
