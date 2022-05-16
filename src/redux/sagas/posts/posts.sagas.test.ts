import sagaHelper from "redux-saga-testing";
import { call, takeLatest } from "redux-saga/effects";
import { URLResourceStrings } from "../../../constants";
import { getData } from "../../features/posts/posts.slice";
import fetchPostsCommentsData from "../postsComments/postsComments.sagas";
import postsSaga, { fetchPosts } from "./posts.sagas";

describe("Posts sagas testing", () => {
  describe("verifying takeLatest", () => {
    const it = sagaHelper(postsSaga());

    it("should call fetchPosts when getData is called", (result) => {
      expect(result).toEqual(takeLatest(getData.type, fetchPosts));
    });
  });

  describe("fetchPosts testing", () => {
    const it = fetchPosts({ type: getData.type, payload: 1 });

    const expectedYield = call(
      fetchPostsCommentsData,
      URLResourceStrings.Posts,
      1
    );

    const actualYield = it.next().value;

    expect(actualYield).toEqual(expectedYield);
  });
});
