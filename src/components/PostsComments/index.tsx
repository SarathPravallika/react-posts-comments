import React, { FC, Fragment, useCallback, useEffect } from "react";
import { START_PAGE_NUMBER, URLResourceStrings } from "../../constants";
import { getData as getComments } from "../../redux/features/comments/comments.slice";
import { getData as getPosts } from "../../redux/features/posts/posts.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Card from "../Card";
import DataTable from "../DataTable";
import "./PostsComments.css";

const PostsComments: FC = () => {
  const dispatch = useAppDispatch();
  const {
    rowsById: postsRowsById,
    rowsOrder: postsRowsOrder,
    columnNames: postsColumnNames,
    totalPages: postsTotalPages,
    errorMessage: postsErrorMessage,
  } = useAppSelector((state) => state.posts);
  const {
    rowsById: commentsRowsById,
    rowsOrder: commentsRowsOrder,
    columnNames: commentsColumnNames,
    totalPages: commentsTotalPages,
    errorMessage: commentsErrorMessage,
  } = useAppSelector((state) => state.comments);

  const fetchCommentsData = useCallback(
    (pageNumber: number) => dispatch(getComments(pageNumber)),
    [dispatch]
  );
  const fetchPostsData = useCallback(
    (pageNumber: number) => dispatch(getPosts(pageNumber)),
    [dispatch]
  );

  useEffect(() => {
    fetchCommentsData(START_PAGE_NUMBER);
    fetchPostsData(START_PAGE_NUMBER);
  }, [fetchCommentsData, fetchPostsData]);

  return (
    <Fragment>
      <h2 className="center">
        Showing all posts and comments from&nbsp;
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noreferrer"
        >
          JSON Placeholder
        </a>
      </h2>
      <div className="cards">
        <Card
          title={URLResourceStrings.Posts}
          errorMessage={postsErrorMessage}
          pageCount={postsTotalPages}
          onPageNumberClick={fetchPostsData}
        >
          <DataTable
            rowsById={postsRowsById}
            rowsOrder={postsRowsOrder}
            columnNames={postsColumnNames}
          />
        </Card>
        <Card
          title={URLResourceStrings.Comments}
          errorMessage={commentsErrorMessage}
          pageCount={commentsTotalPages}
          onPageNumberClick={fetchCommentsData}
        >
          <DataTable
            rowsById={commentsRowsById}
            rowsOrder={commentsRowsOrder}
            columnNames={commentsColumnNames}
          />
        </Card>
      </div>
    </Fragment>
  );
};

export default PostsComments;
