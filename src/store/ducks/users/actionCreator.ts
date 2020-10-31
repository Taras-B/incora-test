import { IUser } from "../../../type";
import { IFetchUsersAction, ISetUsersAction, ISetUsersLoadingAction, LoadingUserState, UsersActionType } from './type'

export const setLoadingUsers = (payload: LoadingUserState): ISetUsersLoadingAction => ({
    type: UsersActionType.SET_LOADING,
    payload
})
export const fetchUsers = (): IFetchUsersAction => ({
    type: UsersActionType.FETCH_USERS,
})
export const setUsers = (payload: IUser[]): ISetUsersAction => ({
    type: UsersActionType.SET_USERS,
    payload
})
