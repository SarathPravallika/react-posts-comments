import { Post } from "../../features/posts/posts.props";
import { Comment } from "../../features/comments/comments.props";

export type RowsById = { [key: string]: Post | Comment };
export type RowsOrder = Array<string>;
export type ColumnNames = Array<string>;
export type RowData = Array<Post | Comment>;
export interface TableState {
  rowsById: RowsById;
  rowsOrder: RowsOrder;
  columnNames: ColumnNames;
  totalPages: number;
  errorMessage: string;
}

export interface PopulateRowsPayload {
  data: Array<Post | Comment>;
  total: number;
}
