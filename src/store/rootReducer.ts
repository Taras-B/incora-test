import { combineReducers } from "redux";
import { postReducer } from "./ducks/post/reducer";
import { postsReducer } from "./ducks/posts/reducer";
import { usersReducer } from "./ducks/users/reducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>