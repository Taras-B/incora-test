import produce, { Draft } from "immer"
import { IUserState, LoadingUserState, UsersAction, UsersActionType } from "./type"

const initialUsersState: IUserState = {
    users: [],
    loading: LoadingUserState.LOADED
}

export const usersReducer = produce((draft: Draft<IUserState>, action: UsersAction) => {
    switch (action.type) {
        case UsersActionType.FETCH_USERS:
            draft.users = []
            draft.loading = LoadingUserState.LOADING
            break
        case UsersActionType.SET_USERS:
            draft.users = action.payload
            draft.loading = LoadingUserState.LOADED
            break
        case UsersActionType.SET_LOADING:
            draft.loading = action.payload
            break

        default:
            break

    }
}, initialUsersState)