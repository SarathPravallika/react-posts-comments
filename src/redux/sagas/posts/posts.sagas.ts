import { takeLatest } from "redux-saga/effects";
import { getData } from "../../features/posts/posts.slice";

//Worker saga
function* fetchPosts() {
  yield console.log("fetchPosts");
}

function* postsSaga() {
  yield takeLatest(getData.type, fetchPosts);
}

export default postsSaga;
