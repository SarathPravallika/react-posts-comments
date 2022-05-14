import React, { useEffect } from "react";
import { getData as getComments } from "../../redux/features/comments/comments.slice";
import { getData as getPosts } from "../../redux/features/posts/posts.slice";
import { useAppDispatch } from "../../redux/hooks";
import Card from "../Card";

function PostsComments() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getComments());
    dispatch(getPosts());
  }, []);

  return (
    <div id="pc">
      <h1>Posts and comments</h1>
      <Card />
      <Card />
    </div>
  );
}

export default PostsComments;
