import { combineReducers } from "redux";
import { postReducer } from "./ducks/posts/reducer";


export const rootReducer = combineReducers({
    posts: postReducer
})