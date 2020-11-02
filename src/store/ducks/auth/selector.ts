import { RootState } from '../../rootReducer'
import { LoadingAuthState } from './type'

const selectAuthState = (state: RootState) => state.auth

export const selectIsAuth = (state: RootState): boolean => selectAuthState(state).isAuth

export const selectAuthLoadingState = (state: RootState): LoadingAuthState =>
  selectAuthState(state).loading

export const selectIsAuthLoading = (state: RootState): boolean =>
  selectAuthLoadingState(state) === LoadingAuthState.LOADING

export const selectIsAuthLoaded = (state: RootState): boolean =>
  selectAuthLoadingState(state) === LoadingAuthState.LOADED
