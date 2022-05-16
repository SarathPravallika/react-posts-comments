import sagaHelper from "redux-saga-testing";
import { call, takeLatest } from "redux-saga/effects";
import { URLResourceStrings } from "../../../constants";
import { getData } from "../../features/comments/comments.slice";
import fetchCommentsCommentsData from "../postsComments/postsComments.sagas";
import commentsSaga, { fetchComments } from "./comments.sagas";

describe("Comments sagas testing", () => {
  describe("verifying takeLatest", () => {
    const it = sagaHelper(commentsSaga());

    it("should call fetchComments when getData is called", (result) => {
      expect(result).toEqual(takeLatest(getData.type, fetchComments));
    });
  });

  describe("fetchComments testing", () => {
    const it = fetchComments({ type: getData.type, payload: 1 });

    const expectedYield = call(
      fetchCommentsCommentsData,
      URLResourceStrings.Comments,
      1
    );

    const actualYield = it.next().value;

    expect(actualYield).toEqual(expectedYield);
  });
});
