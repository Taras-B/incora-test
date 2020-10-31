import { combineReducers } from "redux";
import { postReducer } from "./ducks/post/reducer";
import { IPostState } from "./ducks/post/type";
import { postsReducer } from "./ducks/posts/reducer";
import { IPostsState } from "./ducks/posts/type";
import { usersReducer } from "./ducks/users/reducer";
import { IUserState } from "./ducks/users/type";


export const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    users: usersReducer,
})

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
    post: IPostState
    posts: IPostsState
    users: IUserState
}