import { combineReducers } from "redux";
import comments from "./features/comments/comments.slice";
import posts from "./features/posts/posts.slice";

const rootReducer = combineReducers({
  posts,
  comments,
});

export default rootReducer;
