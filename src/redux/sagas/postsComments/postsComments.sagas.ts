import axios, { AxiosResponse } from "axios";
import { call } from "redux-saga/effects";
import { getUserName } from "../../../utilities";

function* fetchPostsCommentsData(apiKey: string, pageNumber: number = 1) {
  try {
    const paginationCount = parseInt(
      process.env.REACT_APP_PAGINATION_COUNT ?? "0"
    );
    const startingIndex = (pageNumber - 1) * paginationCount;
    const userName: string = yield call(getUserName);
    const axiosResponse: AxiosResponse = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/${apiKey}?_start=${startingIndex}&_limit=${paginationCount}`,
      {
        headers: {
          "user-name": `${userName}`,
        },
      }
    );
    const { data, headers } = axiosResponse;
    const total = Math.ceil(
      parseInt(headers["x-total-count"] || "0") / paginationCount
    );
    return { data, total };
  } catch (error) {
    throw error;
  }
}

export default fetchPostsCommentsData;
