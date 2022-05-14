import { fork, all } from "redux-saga/effects";
import commentsSaga from "./comments/comments.sagas";
import postsSaga from "./posts/posts.sagas";

export default function* rootSaga() {
  yield all([fork(postsSaga), fork(commentsSaga)]);
}
