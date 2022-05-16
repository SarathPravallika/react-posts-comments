import { createSlice } from "@reduxjs/toolkit";
import { fillRowData } from "../../../utilities";
import { PopulateRowsPayload, TableState } from "./table.props";

const initialState: TableState = {
  rowsById: {},
  rowsOrder: [],
  columnNames: [],
  totalPages: 0,
  errorMessage: "",
};

const generateTableSlice = (SLICE_NAME: string) => {
  return createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
      resetRows() {
        return initialState;
      },
      populateRows(state, { payload }: { payload: PopulateRowsPayload }) {
        const { data, total } = payload;
        const { rowsById, rowsOrder, columnNames } = fillRowData(data);
        state.rowsById = rowsById;
        state.rowsOrder = rowsOrder;
        state.columnNames = columnNames;
        state.totalPages = total;
        state.errorMessage = "";
      },
      fetchError(state, { payload }) {
        state.errorMessage = payload;
      },
    },
  });
};

export default generateTableSlice;
