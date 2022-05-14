import { takeLatest } from "redux-saga/effects";
import { getData } from "../../features/comments/comments.slice";

//Worker saga
function* fetchComments() {
  yield console.log("fetchComments");
}

function* commentsSaga() {
  yield takeLatest(getData.type, fetchComments);
}
export default commentsSaga;
