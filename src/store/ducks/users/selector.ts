import { RootState } from "../../rootReducer";
import { IUserState, LoadingUserState } from "./type";

const selectUsersState = (state: RootState) => state.users

export const selectUsersItems = (state: RootState): IUserState['users'] => selectUsersState(state).users

export const selectUserLoadingState = (state: RootState): LoadingUserState => selectUsersState(state).loading
export const selectIsUsersLoading = (state: RootState): boolean =>
    selectUserLoadingState(state) === LoadingUserState.LOADING
export const selectIsUsersLoaded = (state: RootState): boolean =>
    selectUserLoadingState(state) === LoadingUserState.LOADED