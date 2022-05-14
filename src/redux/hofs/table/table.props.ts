import { Post } from "../../features/posts/posts.props";
import { Comment } from "../../features/comments/comments.props";

export interface TableState {
  rowsById: { [id: string]: Post | Comment };
  rowsOrder: Array<string>;
}
