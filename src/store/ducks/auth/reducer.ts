import produce, { Draft } from "immer"
import { IAuthState, LoadingAuthState, AuthAction, AuthActionType } from "./type"

const initialAuthState: IAuthState = {
    isAuth: false,
    user: undefined,
    loading: LoadingAuthState.LOADED
}

export const authReducer = produce((draft: Draft<IAuthState>, action: AuthAction) => {
    switch (action.type) {
        case AuthActionType.FETCH_SET_AUTH:
            draft.loading = LoadingAuthState.LOADING
            break
        case AuthActionType.SET_AUTH:
            draft.isAuth = action.payload
            draft.loading = LoadingAuthState.LOADED
            break
        case AuthActionType.SET_LOADING:
            draft.loading = action.payload
            break

        default:
            break

    }
}, initialAuthState)