import generateTableActions from "../../hofs/table/table.actions";
import generateTableSlice from "../../hofs/table/table.slice";

const SLICE_NAME = "posts";
const postsSlice = generateTableSlice(SLICE_NAME);
const { getData } = generateTableActions(SLICE_NAME);

export const { resetRows, populateRows } = postsSlice.actions;
export { getData };
export default postsSlice.reducer;
