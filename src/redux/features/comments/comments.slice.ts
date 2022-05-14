import generateTableActions from "../../hofs/table/table.actions";
import generateTableSlice from "../../hofs/table/table.slice";

const SLICE_NAME = "comments";
const commentsSlice = generateTableSlice(SLICE_NAME);
const { getData } = generateTableActions(SLICE_NAME);

export const { resetRows, populateRows } = commentsSlice.actions;
export { getData };
export default commentsSlice.reducer;
