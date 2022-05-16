import { AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { URLResourceStrings } from "../../../constants";
import {
  getData,
  populateRows,
  fetchError,
} from "../../features/posts/posts.slice";
import fetchPostsCommentsData from "../postsComments/postsComments.sagas";

//Worker saga
export function* fetchPosts(action: ReturnType<typeof getData>) {
  try {
    const { data, total } = yield call(
      fetchPostsCommentsData,
      URLResourceStrings.Posts,
      action.payload
    );
    yield put(populateRows({ data, total }));
  } catch (error) {
    const err = error as AxiosError;
    yield put(fetchError(err.message));
  }
}

function* postsSaga() {
  yield takeLatest(getData.type, fetchPosts);
}

export default postsSaga;
