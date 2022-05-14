import { createSlice } from "@reduxjs/toolkit";
import { TableState } from "./table.props";

const initialState: TableState = {
  rowsById: {},
  rowsOrder: [],
};

const generateTableSlice = (SLICE_NAME: string) => {
  return createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
      resetRows() {
        return initialState;
      },
      populateRows(state, { payload }) {
        // Add logic here
      },
    },
  });
};

export default generateTableSlice;
