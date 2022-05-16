import { AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { URLResourceStrings } from "../../../constants";
import {
  getData,
  populateRows,
  fetchError,
} from "../../features/comments/comments.slice";
import fetchPostsCommentsData from "../postsComments/postsComments.sagas";

//Worker saga
export function* fetchComments(action: ReturnType<typeof getData>) {
  try {
    const { data, total } = yield call(
      fetchPostsCommentsData,
      URLResourceStrings.Comments,
      action.payload
    );
    yield put(populateRows({ data, total }));
  } catch (error) {
    const err = error as AxiosError;
    yield put(fetchError(err.message));
  }
}

function* commentsSaga() {
  yield takeLatest(getData.type, fetchComments);
}

export default commentsSaga;
