import { combineReducers } from "redux";
import { authReducer } from "./ducks/auth/reducer";
import { IAuthState } from "./ducks/auth/type";
import { postReducer } from "./ducks/post/reducer";
import { IPostState } from "./ducks/post/type";
import { postsReducer } from "./ducks/posts/reducer";
import { IPostsState } from "./ducks/posts/type";
import { usersReducer } from "./ducks/users/reducer";
import { IUserState } from "./ducks/users/type";


export const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    post: postReducer,
    users: usersReducer,

})

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
    auth: IAuthState
    post: IPostState
    posts: IPostsState
    users: IUserState
}